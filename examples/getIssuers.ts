/**
 * Please visit our doc for more information
 * https://docs.multisafepay.com/api/#gateway-issuers
 */
import MSP from '@multisafepay/api-wrapper-test';

async () => {
  try {
    const MSPClient = new MSP(apiKey, { environment: 'test' });

    return await MSPClient.issuers.get();
  } catch (error) {
    console.log(error);
  }
};
