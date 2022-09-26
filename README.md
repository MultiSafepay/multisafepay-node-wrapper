<p align="center">
    <img src="https://camo.githubusercontent.com/517483ae0eaba9884f397e9af1c4adc7bbc231575ac66cc54292e00400edcd10/68747470733a2f2f7777772e6d756c7469736166657061792e636f6d2f66696c6561646d696e2f74656d706c6174652f696d672f6d756c7469736166657061792d6c6f676f2d69636f6e2e737667" width="400px" position="center">
</p>

# Node.js wrapper for the MultiSafepay API

This wrapper simplifies working with the MultiSafepay API and lets you integrate MultiSafepay in your Node.js application.

## About MultiSafepay

MultiSafepay is a Dutch payment service provider, which takes care of contracts, processing transactions, and collecting payment for a range of local and international payment methods. Start selling online today and manage all your transactions in one place!

## Requirements

- You will need a MultiSafepay account. Consider [creating a test account](https://testmerchant.multisafepay.com/signup) first.
- If using Node 8.0+, we recommend using async/await. For older versions of Node, use promises or callbacks instead of async/await.

## Installation

With npm:

```sh
npm install @multisafepay/api-wrapper --save
```

And yarn:

```sh
yarn add @multisafepay/api-wrapper
```

## Usage

Set up the client for testing with **ES6 imports**:

```javascript
import MSPClient from '@multisafepay/api-wrapper';
const client = new MSPClient('apiKey');
```

With **require module**:

```javascript
const MSPClient = require('@multisafepay/api-wrapper').default;
const client = new MSPClient('apiKey');
```

To use the test environment:

```javascript
const client = new MSPClient('apiKey', { environment: 'test' });
```

Create a test order with **async/await**:

```javascript
# This code creates a redirect iDEAL order
async () => {
  try {
    const multiSafePayClient = new MSPClient(apiKey, { environment: 'test' });

    return await multiSafePayClient.orders.create({
      type: 'redirect',
      order_id: "my-order-id-1",
      gateway: 'iDEAL',
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
        locale: 'en_US',
      },
      second_chance: {
        send_email: true,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
```

With **promises**:

```javascript
# This code creates a redirect iDEAL order
multiSafePayClient.orders
  .create({
    type: 'redirect',
    order_id: 'my-order-id-1',
    gateway: 'iDEAL',
    currency: 'EUR',
    amount: '1000',
    description: 'Test Order Description',
    payment_options: {
      notification_url:
        'http://www.example.com/client/notification?type=notification',
      redirect_url: 'http://www.example.com/client/notification?type=redirect',
      cancel_url: 'http://www.example.com/client/notification?type=cancel',
      close_window: '',
    },
    customer: {
      locale: 'en_US',
    },
    second_chance: {
      send_email: true,
    },
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

```

See [more examples](https://github.com/MultiSafepay/multisafepay-node-wrapper/tree/master/examples).

## Support

Create an issue on this repository or email <a href="mailto:integrationt@multisafepay.com">integration@multisafepay.com</a>

## Contributions

Feel free to [create a pull request](https://github.com/MultiSafepay/multisafepay-node-wrapper/pulls) on this repository to suggest improvements.

## API reference

See MultiSafepay Docs – [API reference](https://docs.multisafepay.com/api/).

## License

[MIT License](https://github.com/MultiSafepay/multisafepay-node-wrapper/blob/master/LICENSE)
