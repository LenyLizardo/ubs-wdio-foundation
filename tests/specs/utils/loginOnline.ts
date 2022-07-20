import Login  from '../../pageobjects/Login';

const username = process.env.APP_USERNAME || '';
const password = process.env.APP_PASSWORD || '';

describe('Login when online', () => {
  it('should successfully login using an external account', async () => {
    await Login.loginOnline(username, password);
  });
});
