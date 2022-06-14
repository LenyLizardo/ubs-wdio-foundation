import Login from '../../../pageobjects/Login';
import PriceDetails from '../../../pageobjects/PriceDetails';

let username = process.env.APP_USERNAME || '';
let password = process.env.APP_PASSWORD || '';

describe('Login while online and check product details', () => {
  it('logs in successfully', async () => {
    Login.loginOnline(username, password);
  });

  it('should have product details checked', async () => {
    PriceDetails.openPriceDetailsPage();
    PriceDetails.changePriceGridWorkspace();
    PriceDetails.openPriceDetailsPage();
  });

  it('should add and delete credit card details', async () => {
    PriceDetails.addCreditCardDetails();
    PriceDetails.deleteCreitCardDetails();
  });

  it('should add and delete invaid / unauthorised credit card details', async () => {
    PriceDetails.addInvalidCreditCardDetails();
    PriceDetails.deleteInvalidCreitCardDetails();
  });
});
