import axios from 'axios';
import Refunds from '../src/resources/refunds';
import createRefundMock from '../__mocks__/createRefund.mock.json';
import createRefundResponse from '../__stubs__/createRefund.stub.json';

import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('refunds', () => {
  let refunds: any;
  beforeEach(() => {
    refunds = new Refunds(axios.create());
  });

  it('create refund', async () => {
    mock
      .onPost('/orders/my-order-id-1/refunds', createRefundMock)
      .reply(200, createRefundResponse);

    const resp = await refunds.create('my-order-id-1', createRefundMock);

    expect(resp).toMatchSnapshot();
  });

  it('create refund with error', async () => {
    const error = {
      error_code: 404,
      error_info: 'Not found',
    };
    mock
      .onPost('/orders/my-order-id-1a/refunds', createRefundMock)
      .reply(404, error);

    const resp = await refunds.create('my-order-id-1a', createRefundMock);

    expect(resp).toEqual(error);
  });
});
