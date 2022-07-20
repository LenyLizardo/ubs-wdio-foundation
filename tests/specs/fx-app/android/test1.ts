import Login from '../../../pageobjects/Login';
import PriceDetails from '../../../pageobjects/PriceDetails';

let username = process.env.APP_USERNAME || '';
let password = process.env.APP_PASSWORD || '';

describe('Login while online and check product details', () => {
  it('logs in successfully', async () => {
    await Login.loginOnline(username, password);
  });

  it('should have product details checked', async () => {
    PriceDetails.openPriceDetailsPage();
    PriceDetails.changePriceGridWorkspace();
    PriceDetails.openPriceDetailsPage();
  })
});
