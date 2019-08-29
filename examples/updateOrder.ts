/**
 * Please visit our doc for more information
 * https://docs.multisafepay.com/api/#update-an-order
 */
import MSP from '@multisafepay/api-wrapper-test';

async () => {
  try {
    //add your apiKey
    const MSPClient = new MSP(apiKey, { environment: 'test' });

    //replace orderId with a order created previously
    return await MSPClient.orders.update(orderId, {
      tracktrace_code: '3SMSP0123456789',
      carrier: 'MSP Logistics',
      ship_date: '01-01-1911',
      reason: 'Fulfilled by warehouse',
      invoice_id: 'AB12345',
    });
  } catch (error) {
    console.log(error);
  }
};
