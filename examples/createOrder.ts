/**
 * Please visit our doc for more information
 * https://docs.multisafepay.com/api/#create-an-order
 */

import MSP from '@multisafepay/api-wrapper-test';

async () => {
  try {
    const MSPClient = new MSP(apiKey, { environment: 'test' });

    return await MSPClient.orders.create({
      type: 'redirect',
      order_id: 'my-order-id-1', //replace here with a new order ID if not works
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
  } catch (error) {
    console.log(error);
  }
};
