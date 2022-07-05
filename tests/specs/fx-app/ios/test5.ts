import Login from '../../../pageobjects/Login';
import Insights from '../../../pageobjects/Insights';

let username = process.env.APP_USERNAME || '';
let password = process.env.APP_PASSWORD || '';
let videoSearchString = 'a video';
let podcastSearchString = 'a podcast';

describe('Check the Insights Live Desk on iOS', () => {
  it('logs in successfully', async () => {
    Login.loginOnline(username, password);
  });

  it('should open the Insights Live Desk', async () => {
    Insights.openInsightLiveDesk();
  });

  it('should open an Article on the Insights Live Desk page', async () => {
    Insights.openArticle();
  });

  it('should open the Insights Trade Ideas', async () => {
    Insights.openInsightTradeIdeas();
  });

  it('should open an Article as a PDF on the Insights Trade Ideas page', async () => {
    Insights.openInsightLiveDesk();
  });
});
