/**
 * Please visit our doc for more information
 * https://docs.multisafepay.com/api/#create-a-refund
 */
import MSP from '@multisafepay/api-wrapper-test';

async () => {
  try {
    const MSPClient = new MSP(apiKey, { environment: 'test' });

    // replace my-order-id-1 with a order created previously and has to be completed
    return await MSPClient.refunds.create('my-order-id-1', {
      currency: 'EUR',
      amount: '8',
      description: 'Your refund description',
    });
  } catch (error) {
    console.log(error);
  }
};
