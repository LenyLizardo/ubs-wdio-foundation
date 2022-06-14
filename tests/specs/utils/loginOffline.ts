import Login from '../pageobjects/Login';

const username = process.env.APP_USERNAME || '';
const pinNumber = process.env.APP_PIN || '';

describe('Login when the phone is in airplane mode', () => {
  it('should successfully login using a pin code when in airplane mode', async () => {
    await Login.loginOffline(username, pinNumber);
  });
});
