import Login from '../../../pageobjects/Login';
import Insights from '../../../pageobjects/Insights';

let username = process.env.APP_USERNAME || '';
let password = process.env.APP_PASSWORD || '';
let videoSearchString = 'a video';
let articleSearchString = 'the article';

describe('Search for Videos and Articles', () => {
  it('logs in successfully', async () => {
    Login.loginOnline(username, password);
  });

  it('should search for a Podcast and load it', async () => {
    Insights.searchVideo(videoSearchString);
  });

  it('should search for an Article and load it', async () => {
    Insights.searchArticle(articleSearchString);
  });
});
