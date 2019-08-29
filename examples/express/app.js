const express = require('express');
const MSP = require('@multisafepay/api-wrapper-test').default;
const app = express();
const port = 3000;

const MSPClient = new MSP('c2e8507e3bb11df070f6c45d36ea2a366eaecea2', {
  environment: 'test',
});

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

//get all gateways
app.get('/gateways', async (req, res) => {
  try {
    res.send({ message: await MSPClient.gateways.get() });
  } catch (error) {
    console.log(error);
  }
});

// get gateway by id example iDeal
app.get('/gateways/:id', async (req, res) => {
  try {
    res.send({ message: await MSPClient.gateways.get(req.params.id) });
  } catch (error) {
    console.log(error);
  }
});

// create order
app.get('/create/order', async (req, res) => {
  try {
    const newOrder = await MSPClient.orders.create({
      type: 'redirect',
      order_id: Math.random(), //replace here with a new order ID
      gateway: '',
      currency: 'EUR',
      amount: '1000',
      description: 'Test Order Description',
      payment_options: {
        notification_url:
          'http://www.example.com/client/notification?type=notification',
        redirect_url:
          'http://www.example.com/client/notification?type=redirect',
        cancel_url: 'http://www.example.com/client/notification?type=cancel',
        close_window: '',
      },
      customer: {
        locale: 'nl_NL',
        ip_address: '89.20.162.110',
        first_name: 'Testperson-nl',
        last_name: 'Approved',
        address1: 'Kraanspoor',
        house_number: '39C',
        zip_code: '1033SC',
        city: 'Amsterdam',
        country: 'NL',
        phone: '0208500500',
        email: 'test@example.com',
        referrer: 'http://test.com',
        user_agent:
          'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36',
      },
      second_chance: {
        send_email: true,
      },
    });

    res.send({ message: newOrder });
  } catch (error) {
    console.log(error);
  }
});

// create refund
app.get('/create/refund', async (req, res) => {
  try {
    res.send({
      message: await MSPClient.refunds.create('my-order-id-2', {
        currency: 'EUR',
        amount: '8',
        description: 'Your refund description',
      }),
    });
  } catch (error) {
    console.log(error);
  }
});

// get issuers
app.get('/issuers', async (req, res) => {
  try {
    res.send({
      message: await MSPClient.issuers.get(),
    });
  } catch (error) {
    console.log(error);
  }
});

// get order by id example: my-order-id-2
app.get('/orders/:id', async (req, res) => {
  try {
    res.send({
      message: await MSPClient.orders.get(req.params.id),
    });
  } catch (error) {
    console.log(error);
  }
});

// update order example: my-order-id-2
app.get('/orders/update/:id', async (req, res) => {
  try {
    res.send({
      message: await MSPClient.orders.get(req.params.id),
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
