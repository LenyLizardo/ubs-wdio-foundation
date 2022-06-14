import Login from '../../pageobjects/Login';
import PriceDetails from '../../pageobjects/PriceDetails';

let username = process.env.APP_USERNAME || '';
let pinNumber = process.env.APP_PIN || '';

describe('Login while offline using a pin code and check product details', () => {
  it('logs in successfully while offline', async () => {
    Login.loginOffline(username, pinNumber);
  });

  it('should have product details checked', async () => {
    PriceDetails.openPriceDetailsPage();
    PriceDetails.changePriceGridWorkspace();
    PriceDetails.openPriceDetailsPage();
  })
});
