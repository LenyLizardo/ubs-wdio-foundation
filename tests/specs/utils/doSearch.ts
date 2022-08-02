import Search from '../../pageobjects/Search';
import allure from '@wdio/allure-reporter';

describe('Suite Number 1', () => {
  it('is true', async () => {
    allure.addSeverity("CRITICAL");
    // allure.addFeature("True Cases");
    // allure.addSeverity("CRITICAL");
    // //await Search.clickSearchBar();
    // await Search.performSearch("BrowserStack");

    // // allureReporter.addFeature('Feature')
    // // expect("this").to.equal("this");
    
  });
  it('is false', async () => {
    // allure.addFeature("False Cases");
    // await Search.clickSearchBar();
    
  });

});
