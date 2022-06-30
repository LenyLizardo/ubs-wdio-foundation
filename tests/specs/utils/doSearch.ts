import Search from '../../pageobjects/Search';

describe('Search Wikipedia Functionality', () => {
  it('performs a successful search', async () => {
    await Search.clickSearchBar();
    //await Search.performSearch("BrowserStack");
    
  });
});
