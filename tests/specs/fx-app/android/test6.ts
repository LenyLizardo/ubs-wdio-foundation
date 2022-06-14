import Login from '../../../pageobjects/Login';
import Insights from '../../../pageobjects/Insights';

let username = process.env.APP_USERNAME || '';
let pinNumber = process.env.APP_PIN || '';
let videoSearchString = 'a video';
let articleSearchString = 'the article';

describe('Search for Videos and Articles while Offline', () => {
  it('logs in successfully', async () => {
    Login.loginOffline(username, pinNumber);
  });

  it('should search for a Video and fail to load it', async () => {
    Insights.searchVideo(videoSearchString);
  });

  it('should open the Article despite being offline', async () => {
    Insights.searchArticle(articleSearchString);
  });
});
