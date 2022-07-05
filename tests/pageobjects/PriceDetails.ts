class PriceDetails {
    constructor() {
        
    }

    async openPriceDetailsPage () {
       await (await this.priceGridSelector).waitForDisplayed({timeout: 30000});
    }

    async changePriceGridWorkspace () {
        
    }

    async addCreditCardDetails () {

    }

    async deleteCreitCardDetails () {

    }

    async addInvalidCreditCardDetails () {

    }

    async deleteInvalidCreitCardDetails () {

    }

    get priceGridSelector () { return $('android=new UiSelector().resourceId("Switch_Preset")') };
    get creditCardNumber () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get creditCardName () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get creditCardMonth () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get creditCardYear () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get creditCardCVV () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
}

export default new PriceDetails;