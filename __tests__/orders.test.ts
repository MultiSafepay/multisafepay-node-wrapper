import axios from 'axios';
import Orders from '../src/resources/orders';
import createOrderMock from '../__mocks__/createOrder.mock.json';
import updateOrderMock from '../__mocks__/updateOrder.mock.json';
import createOrderResponse from '../__stubs__/createOrder.stub.json';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('orders', () => {
  let orders: any;
  const error = { error_code: 1006, error_info: 'Invalid transaction ID' };
  beforeEach(() => {
    orders = new Orders(axios.create());
  });

  it('check endpoint', () => {
    expect(orders.endpoint).toBe('orders');
  });

  it('create order', async () => {
    mock.onPost('/orders', createOrderMock).reply(200, createOrderResponse);

    const resp = await orders.create(createOrderMock);

    expect(resp).toMatchSnapshot();
  });

  it('create order with error', async () => {
    const copyOrder = Object.assign({}, createOrderMock);
    copyOrder.order_id = 'my-order-id-1';

    mock.onPost('/orders', copyOrder).reply(404, error);

    const resp = await orders.create(copyOrder);

    expect(resp).toEqual(error);
  });

  it('update order', async () => {
    const mockResponse = {
      success: true,
      data: {},
    };
    mock
      .onPatch(`/orders/my-order-id-1a`, updateOrderMock)
      .reply(200, mockResponse);

    const resp = await orders.update('my-order-id-1a', updateOrderMock);

    expect(resp).toMatchSnapshot();
  });

  it('update order with error', async () => {
    mock
      .onPatch(`/orders/${createOrderMock.order_id}`, updateOrderMock)
      .reply(404, error);

    const resp = await orders.update(createOrderMock.order_id, updateOrderMock);

    expect(resp).toEqual(error);
  });
});
