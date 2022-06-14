import Search from '../../pageobjects/Search';

describe('Search Wikipedia Functionality', () => {
  it('can find search results', async () => {
    await Search.clickSearchBar();
    
    await Search.performSearch("BrowserStack");
    //var allProductsName = await $$(`android.widget.TextView`);
    //assert(allProductsName.length > 0);
  });
});
