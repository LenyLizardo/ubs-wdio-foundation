import { expect } from 'chai';
class Search {
    constructor() {
        
    };

    async clickSearchBar () {
        await this.searchSelector.waitForDisplayed({ timeout: 200000 });
        await this.searchSelector.click();
        expect('this').to.equal('not this');
    };

    async performSearch (searchText: string) {
        await this.insertTextSelector.waitForDisplayed({ timeout: 30000 });
        await this.insertTextSelector.setValue(searchText);
        await browser.pause(5000);
    };

    get searchSelector () { 
        return ($('~filter-btn'))
    };

    get insertTextSelector () {
        return ($('~filter-btn'))
    };
}

export default new Search;