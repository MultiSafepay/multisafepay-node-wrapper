import axios from 'axios';
import Issuers from '../src/resources/issuers';
import issuersResponse from '../__stubs__/issuers.stub.json';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('issuers', () => {
  let issuers: any;
  beforeEach(() => {
    issuers = new Issuers(axios.create());
  });
  it('check endpoint', () => {
    // TODO import enum endpoint
    expect(Issuers.endpoint).toBe('issuers/ideal');
  });

  it('get ideal with success', async () => {
    mock.onGet('/issuers/ideal').reply(200, issuersResponse);

    const resp = await issuers.get();

    expect(resp).toMatchSnapshot();
  });

  it('get error sending wrong endpoint', async () => {
    const error = {
      error_code: 1036,
      error_info: 'Invalid iDEAL issuer ID',
    };
    const newEndpoint = 'issuers/hello';
    Issuers.endpoint = newEndpoint;
    mock.onGet(newEndpoint).reply(404, error);
    const resp = await issuers.get();

    expect(resp).toEqual(error);
  });
});
