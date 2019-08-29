import axios from 'axios';
import Gateways from './resources/gateways';
import Orders from './resources/orders';
import Refunds from './resources/refunds';
import Issuers from './resources/issuers';
import Environment from './typings/env';
import { BaseUrl } from './typings/endpoints';

type Options = {
  environment: 'test' | 'live';
};

enum Keys {
  ENVIRONMENT = 'environment',
}

export default class MultiSafepayClient {
  private apiKey: string;
  gateways: any;
  orders: any;
  issuers: any;
  refunds: any;
  static baseURL: BaseUrl;
  constructor(apiKey: string, options?: Options) {
    this.existsApiKey(apiKey);
    this.setEnviorement(options);
    this.apiKey = apiKey;
    this.gateways = new Gateways(this.createClient());
    this.orders = new Orders(this.createClient());
    this.issuers = new Issuers(this.createClient());
    this.refunds = new Refunds(this.createClient());
  }

  existsApiKey(apiKey: string) {
    if (apiKey === '' || apiKey === undefined || typeof apiKey !== 'string') {
      throw new Error('Empty or wrong apiKey');
    }
  }
  createClient() {
    try {
      return axios.create({
        baseURL: MultiSafepayClient.baseURL,
        headers: {
          api_key: this.apiKey,
          'Content-Type': 'application/json; charset=UTF-8;',
        },
      });
    } catch (err) {
      return err;
    }
  }

  setEnviorement(options: Options) {
    if (
      options !== undefined &&
      options.hasOwnProperty(Keys.ENVIRONMENT) &&
      options.environment === Environment.TEST
    ) {
      MultiSafepayClient.baseURL = BaseUrl.TEST;
    } else {
      MultiSafepayClient.baseURL = BaseUrl.LIVE;
    }
  }
}
