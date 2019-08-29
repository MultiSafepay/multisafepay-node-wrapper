import Resource from '../resource';
import Endpoints from '../typings/endpoints';

export default class Gateways extends Resource {
  static readonly endpoint = Endpoints.GATEWAYS;
  constructor(client: any) {
    super(client, Gateways.endpoint);
  }
}
