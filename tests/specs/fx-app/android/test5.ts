import Login from '../../../pageobjects/Login';
import Insights from '../../../pageobjects/Insights';

let username = process.env.APP_USERNAME || '';
let password = process.env.APP_PASSWORD || '';
let podcastSearchString = 'a podcast';
let articleSearchString = 'the article';

describe('Check the Live Desk on Android', () => {
  it('logs in successfully', async () => {
    await Login.loginOnline(username, password);
  });

  it('should open the Live Desk page', async () => {
    Insights.openLiveDesk();
  });

  it('should search for a Podcast and load it', async () => {
    Insights.searchPodcast(podcastSearchString);
  });

  it('should search for an Article and load it', async () => {
    Insights.searchArticle(articleSearchString);
  });
});
