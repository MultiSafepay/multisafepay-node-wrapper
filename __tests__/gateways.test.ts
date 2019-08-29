import axios from 'axios';
import Gateways from '../src/resources/gateways';
import allGatewaysResponse from '../__stubs__/allGateways.stub.json';
import gatewaybyIDResponse from '../__stubs__/gatewayByID.stub.json';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('gateways', () => {
  let gateways: any;
  beforeEach(() => {
    gateways = new Gateways(axios.create());
  });

  it('check endpoint', () => {
    expect(Gateways.endpoint).toBe('gateways');
  });

  it('get all gateways', async () => {
    mock.onGet('/gateways').reply(200, allGatewaysResponse);

    const resp = await gateways.get();

    expect(resp).toMatchSnapshot();
  });

  it('get gateways by ID ex:IDEAL', async () => {
    mock.onGet('/gateways/IDEAL').reply(200, gatewaybyIDResponse);

    const resp = await gateways.get('IDEAL');

    expect(resp).toMatchSnapshot();
  });

  it('get gateways by wrong ID', async () => {
    const error = {
      error_code: 1023,
      error_info: 'No gateway (payment method) available',
    };
    mock.onGet('/gateways/hello').reply(404, error);

    const resp = await gateways.get('hello');

    expect(resp).toEqual(error);
  });
});
