import multisafepay from '../src/multisafepay';
import Environment from '../src/typings/env';
import { BaseUrl } from '../src/typings/endpoints';

describe('multisafepay', () => {
  it('return error when empty api key is provided', () => {
    try {
      new multisafepay('');
    } catch (error) {
      expect(error).toEqual(new Error('Empty or wrong apiKey'));
    }
  });

  it('setEnviorement to test', () => {
    const options = {
      environment: Environment.TEST,
    };
    new multisafepay('a', options);
    expect(multisafepay.baseURL).toEqual(BaseUrl.TEST);
  });

  it('setEnviorement to live', () => {
    new multisafepay('a');
    expect(multisafepay.baseURL).toEqual(BaseUrl.LIVE);
  });
});
