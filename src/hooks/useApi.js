import { useState, useEffect, useCallback } from 'react';
import { makeRequest } from '../api/makeRequest';
import toast from 'react-hot-toast';

const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useApi = (endpoint, options = {}) => {
  const {
    method = 'GET',
    body = null,
    dependencies = [],
    cacheKey = endpoint,
    shouldCache = method === 'GET',
    invalidateCache = false
  } = options;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Check cache first
      if (shouldCache && !invalidateCache) {
        const cachedData = cache.get(cacheKey);
        if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
          setData(cachedData.data);
          setIsLoading(false);
          return;
        }
      }

      const response = await makeRequest[method.toLowerCase()](endpoint, body);

      // Update cache for GET requests
      if (shouldCache) {
        cache.set(cacheKey, {
          data: response.data,
          timestamp: Date.now()
        });
      }

      setData(response.data);
    } catch (err) {
      setError(err);
      toast.error(err.response?.data?.message || 'An error occurred while fetching data');
    } finally {
      setIsLoading(false);
    }
  }, [endpoint, method, body, cacheKey, shouldCache, invalidateCache]);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...dependencies]);

  const invalidate = useCallback(() => {
    if (cacheKey) {
      cache.delete(cacheKey);
    }
    fetchData();
  }, [cacheKey, fetchData]);

  return {
    data,
    error,
    isLoading,
    refetch: fetchData,
    invalidate
  };
};

// Helper hook for mutations (POST, PUT, DELETE)
export const useApiMutation = (endpoint, options = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mutate = async (data) => {
    try {
      setIsLoading(true);
      setError(null);

      const method = options.method || 'POST';
      const response = await makeRequest[method.toLowerCase()](endpoint, data);

      // Invalidate related cache entries if specified
      if (options.invalidateQueries) {
        options.invalidateQueries.forEach(key => cache.delete(key));
      }

      if (options.onSuccess) {
        options.onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setError(err);
      toast.error(err.response?.data?.message || 'An error occurred');
      if (options.onError) {
        options.onError(err);
      }
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate,
    isLoading,
    error
  };
}; 