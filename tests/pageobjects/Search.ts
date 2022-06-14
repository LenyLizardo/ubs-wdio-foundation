class Search {
    constructor() {
        
    }

    async clickSearchBar () {
        this.searchSelector.waitForDisplayed({ timeout: 30000 });
        this.searchSelector.click();
    }

    async performSearch (searchText: string) {
        await this.insertTextSelector.waitForDisplayed({ timeout: 30000 });
        await this.insertTextSelector.setValue(searchText);
        await browser.pause(5000);
    }

    get searchSelector () { return $(`~Search Wikipedia`) };
    get insertTextSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') }
}

export default new Search;