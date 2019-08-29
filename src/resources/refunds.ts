import Resource from '../resource';

export default class Refunds {
  client: any;
  constructor(client: any) {
    this.client = client;
  }

  async create(order_id: string, data: any) {
    try {
      const response = await this.client.post(
        `/orders/${order_id}/refunds`,
        data,
      );
      return response.data;
    } catch (err) {
      return Resource.exceptionHandle(err);
    }
  }
}
