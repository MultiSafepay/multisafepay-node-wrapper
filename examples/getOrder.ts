/**
 * Please visit our doc for more information
 * https://docs.multisafepay.com/api/#retrieve-an-order
 */
import MSP from '@multisafepay/api-wrapper-test';

async () => {
  try {
    const MSPClient = new MSP(apiKey, { environment: 'test' });

    return await MSPClient.orders.get('my-order-id-1');
  } catch (error) {
    console.log(error);
  }
};
