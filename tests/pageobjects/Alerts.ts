class Alerts {
    constructor() {
        
    }

    async clickAlertsTab () {
        await this.alertTabSelector.waitForDisplayed({ timeout: 30000 });
        await this.alertTabSelector.click();
    }

    async filterResults () {
        await this.filterPillSelector.waitForDisplayed({ timeout: 30000 });
        await this.filterPillSelector.click();
    }

    async openAlert () {
        await this.alertSelector.waitForDisplayed({ timeout: 30000 });
        await this.alertSelector.click();
    }

    get alertTabSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') }
    get filterPillSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get alertSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') }
}

export default new Alerts;