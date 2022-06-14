import PriceDetails from '../pageobjects/PriceDetails';

describe('Perform Price Details Page Checks', () => {
  it('should open the price details page defaulted to Quick Trade', async () => {
    await PriceDetails.openPriceDetailsPage();
  });

  it('should fail to change the price grid workspace', async () => {
    await PriceDetails.changePriceGridWorkspace();
  });

  it('should add credit card details', async () => {
    await PriceDetails.addCreditCardDetails();
  });

  it('should delete credit card details', async () => {
    await PriceDetails.deleteCreitCardDetails();
  })
});
