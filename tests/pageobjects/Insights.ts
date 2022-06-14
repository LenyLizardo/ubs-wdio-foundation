class Insights {
    constructor() {
        
    }

    async openInsightLiveDesk () {
        await this.insightLiveDeskSelector.waitForDisplayed({ timeout: 30000 });
        await this.insightLiveDeskSelector.click();
    }

    async openArticle () {
        await this.articleSelector.waitForDisplayed({ timeout: 30000 });
        await this.articleSelector.click();
    }

    async openInsightTradeIdeas () {
        await this.insightTradeIdeasSelector.waitForDisplayed({ timeout: 30000 });
        await this.insightTradeIdeasSelector.click();
    }

    async openArticlePDF () {
        await this.articlePDFSelector.waitForDisplayed({ timeout: 30000 });
        await this.articlePDFSelector.click();
    }

    async openLiveDesk () {
        await this.liveDeskSelector.waitForDisplayed({ timeout: 30000 });
        await this.liveDeskSelector.click();
    }

    async searchVideo (searchText : string) {
        await this.videoSearchSelector.waitForDisplayed({ timeout: 30000 });
        await this.videoSearchSelector.setValue(searchText);
        await browser.pause(5000);
        await this.videoSearchButtonSelector.click();

        await this.videoSelector.click();
    }

    async searchPodcast (searchText : string) {
        await this.podcastSearchSelector.waitForDisplayed({ timeout: 30000 });
        await this.podcastSearchSelector.setValue(searchText);
        await browser.pause(5000);
        await this.podcastSearchButtonSelector.click();

        await this.podcastSelector.click();
    }

    async searchArticle (searchText : string) {
        await this.articleSearchSelector.waitForDisplayed({ timeout: 30000 });
        await this.articleSearchSelector.setValue(searchText);
        await browser.pause(5000);
        await this.articleSearchButtonSelector.click();

        await this.articleSelector.click();
    }

    async validateHistory () {
        await this.historySelector.waitForDisplayed({ timeout: 30000 });
        await this.historySelector.click();
    }

    async validateReadLater () {
        await this.readLaterSelector.waitForDisplayed({ timeout: 30000 });
        await this.readLaterSelector.click();
    }



    get insightLiveDeskSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get liveDeskSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get articleSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get articlePDFSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get insightTradeIdeasSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get videoSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get videoSearchSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get videoSearchButtonSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get podcastSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get podcastSearchSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get podcastSearchButtonSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get articleSearchSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get articleSearchButtonSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get historySelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get readLaterSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    
}

export default new Insights;