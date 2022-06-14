import Login from '../../../pageobjects/Login';
import Insights from '../../../pageobjects/Insights';

let username = process.env.APP_USERNAME || '';
let password = process.env.APP_PASSWORD || '';
let videoSearchString = "video search";
let articleSearchString = "article search";

describe('Login using external account', () => {
  it('logs in successfully', async () => {
    Login.loginExternal(username, password);
  });

  it('should search for a video and an article', async () => {
    Insights.searchVideo(videoSearchString);
    Insights.searchArticle(articleSearchString);
  })
});
