<p align="center">
  <img src="https://www.multisafepay.com/img/multisafepaylogo.svg" width="400px" position="center">
</p>

# Node.js wrapper for the MultiSafepay API

This wrapper simplifies working with the MultiSafepay API and allows you to integrate MultiSafepay within your Node.js application.

## About MultiSafepay

MultiSafepay is a collecting payment service provider which means we take care of the agreements, technical details and payment collection required for each payment method. You can start selling online today and manage all your transactions from one place.

## Requirements

- To use the wrapper you need a MultiSafepay account. You can create a test account on https://testmerchant.multisafepay.com/signup
- If you’re using Node 8.0+ we recommend to use async/await if it is a older versions of Node, you can use promises or callbacks instead of async/await.

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

Setup the client for testing with **ES6 imports**

```javascript
import MSPClient from '@multisafepay/api-wrapper';
const client = new MSPClient('apiKey');
```

With **require module**

```javascript
const MSPClient = require('@multisafepay/api-wrapper').default;
const client = new MSPClient('apiKey');
```


>Currently we are working to add typescript support


If you want to use test env if not by default is live

```javascript
const client = new MSPClient('apiKey', { environment: 'test' });
```

Creating a test order with **async/await**

```javascript
# The following code will create a redirect iDEAL order
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

With **promises**

```javascript
# The following code will create a redirect iDEAL order
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

Click [here](https://github.com/MultiSafepay/multisafepay-node-wrapper/tree/master/examples) for more examples.

## API Documentation

[Click here](https://docs.multisafepay.com/api/) for the MultiSafepay API documentation.

## Support

If you have any issues, problems or questions you can create an issue on this repository or contact us at <a href="mailto:integrationt@multisafepay.com">integration@multisafepay.com</a>

## A gift for your contribution
We look forward to receiving your input. Have you seen an opportunity to change things for better? We would like to invite you to create a pull request on GitHub.
Are you missing something and would like us to fix it? Suggest an improvement by sending us an [email](mailto:integration@multisafepay.com) or by creating an issue.

What will you get in return? A brand new designed MultiSafepay t-shirt which will make you part of the team!

## License

[MIT License](https://github.com/MultiSafepay/multisafepay-node-wrapper/blob/master/LICENSE)

## Want to be part of the team?
Are you a developer interested in working at MultiSafepay? [View](https://www.multisafepay.com/careers/#jobopenings) our job openings and feel free to get in touch with us.
