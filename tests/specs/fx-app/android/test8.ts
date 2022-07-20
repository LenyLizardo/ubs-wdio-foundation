import Login from '../../../pageobjects/Login';
import Alerts from '../../../pageobjects/Alerts';

let username = process.env.APP_USERNAME || '';
let password = process.env.APP_PASSWORD || '';
let videoSearchString = 'a video';
let articleSearchString = 'the article';

describe('Check the Alerts tab and associated alerts', () => {
  it('logs in successfully', async () => {
    await Login.loginOnline(username, password);
  });

  it('should open the Alerts tab', async () => {
    Alerts.clickAlertsTab();
  });

  it('should filter the Alerts', async () => {
    Alerts.filterResults();
  });

  it('should open an Alert', async () => {
    Alerts.openAlert();
  });
});
