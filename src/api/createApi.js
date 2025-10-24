import toast from 'react-hot-toast';
import { makeRequest } from './makeRequest';

export const onStockUpdate = async (
  updatedStock,
  stocktaker,
  startTime,
  endTime,
  statusContext,
  onClose
) => {
  try {
    const response = await makeRequest.post('/pharmacy/submit-stock-taken', {
      updatedStock: updatedStock.map(item => ({
        item_id: item.item_id,
        new_quantity: parseFloat(item.new_quantity),
        profit_price: parseFloat(item.profit_price),
        unit_profit: parseFloat(item.unit_profit),
      })),
      stocktaker: stocktaker,
      startTime: startTime.toISOString(),
      endTime: endTime.toISOString(),
    });

    if (response.status === 201) {
      console.log('Stocktake submitted successfully:', response);
      toast.success('Stock taken submitted successfully!');
      statusContext.setLoading(true);
      onClose();
      // Optionally update your local inventory data or trigger a refresh
    } else {
      console.error('Failed to submit stocktake:', response.data);
      toast.error(`Failed to submit stocktake: ${response.data.message || 'An error occurred.'}`);
    }
  } catch (error) {
    console.error('Error sending stock taken:', error);
    toast.error('Failed to submit stocktake. Please check your network connection.');
  }
};
