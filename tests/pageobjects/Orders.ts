class Orders {
    constructor() {
        
    }

    async clickOrdersTab () {
        await this.orderTabSelector.waitForDisplayed({ timeout: 30000 });
        await this.orderTabSelector.click();
    }

    async clickTradesTab () {
        await this.tradesTabSelector.waitForDisplayed({ timeout: 30000 });
        await this.tradesTabSelector.click();
    }

    async filterOrdersFromLastWeek (filterText: string) {
        await this.filters.waitForDisplayed({ timeout: 30000 });
        await this.filters.setValue(filterText);
        await browser.pause(5000);
    }

    async searchForOrder (searchText : string) {
        await this.searchOrder.waitForDisplayed({ timeout: 30000 });
        await this.searchOrder.setValue(searchText);
    }

    async searchForTrade (searchText : string) {
        await this.searchOrder.waitForDisplayed({ timeout: 30000 });
        await this.searchOrder.setValue(searchText);
    }

    get orderTabSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get tradesTabSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get filters () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get searchOrder () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get searchTrade () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
}

export default new Orders;