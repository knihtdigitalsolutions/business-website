import React, { useEffect } from 'react';
import { useStatusContext } from '../context/StatusContext';
import { LoaderIcon } from 'lucide-react';

const Loader = () => {
  const statusContext = useStatusContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      statusContext.setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [statusContext.loading]);

  return (
    <div className="flex justify-center items-center h-full mt-20">
      <LoaderIcon className="text-green-500" />
      <span className="ml-4 text-lg">Loading...</span>
    </div>
  );
};

export default Loader;
