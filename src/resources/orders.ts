import Resource from '../resource';
import Endpoints from '../typings/endpoints';

export default class Orders extends Resource {
  static readonly endpoint = Endpoints.ORDERS;
  constructor(client: any) {
    super(client, Orders.endpoint);
  }
}
