/**
 * Please visit our doc for more information
 * https://docs.multisafepay.com/api/#retrieve-a-gateway
 */
import MSP from '@multisafepay/api-wrapper-test';

async () => {
  try {
    const MSPClient = new MSP(apiKey, { environment: 'test' });

    return await MSPClient.gateways.get('PAYAFTER');
  } catch (error) {
    console.log(error);
  }
};
