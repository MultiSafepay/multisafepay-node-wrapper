export enum BaseUrl {
  TEST = 'https://testapi.multisafepay.com/v1/json/',
  LIVE = 'https://api.multisafepay.com/v1/json/',
}

enum Endpoints {
  GATEWAYS = 'gateways',
  ISSUERS_IDEAL = 'issuers/ideal',
  ORDERS = 'orders',
}

export default Endpoints;
