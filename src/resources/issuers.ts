import Endpoints from '../typings/endpoints';
import Resource from '../resource';

export default class Issuers {
  client: any;
  static endpoint: string;
  constructor(client: any) {
    this.client = client;
    Issuers.endpoint = Endpoints.ISSUERS_IDEAL;
  }

  async get() {
    try {
      const response = await this.client.get(Issuers.endpoint);
      return response.data;
    } catch (err) {
      return Resource.exceptionHandle(err);
    }
  }
}
