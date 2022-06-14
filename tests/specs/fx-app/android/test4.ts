import Login from '../../../pageobjects/Login';
import Orders from '../../../pageobjects/Orders';

let username = process.env.APP_USERNAME || '';
let password = process.env.APP_PASSWORD || '';
let filterText = 'last week';
let searchText = 'search term';

describe('Open, filter and search orders for the past week', () => {
  it('logs in successfully', async () => {
    Login.loginOnline(username, password);
  });

  it('should open the Orders tab and filter for the past week', async () => {
    Orders.clickOrdersTab();
    Orders.filterOrdersFromLastWeek(filterText);
  });

  it('should search for an order', async () => {
    Orders.searchForOrder(searchText);
  });

  it('should open the Trades tab and filter for the past week', async () => {
    Orders.clickTradesTab();
    Orders.filterOrdersFromLastWeek(filterText);
  });

  it('should search for a trade', async () => {
    Orders.searchForTrade(searchText);
  })
});
