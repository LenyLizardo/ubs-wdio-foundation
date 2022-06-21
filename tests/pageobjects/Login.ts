class Login {
    constructor() {
        
    }

    /**
     * 
     * @param username - the username for logging into the app
     * @param password - the password for logging into the app
     */
    async loginOnline (username : string, password : string) {
        await this.usernameSelector.waitForDisplayed({ timeout: 30000 });
        await this.usernameSelector.setValue(username);

        await this.passwordSelector.waitForDisplayed({ timeout: 30000 });
        await this.passwordSelector.setValue(password);

        await this.submitButtonSelector.click();        
    }

    async loginAsOnline () {
        console.log('Logging in');
    }

    async loginOffline (username : string, pinNum : string) {
        await this.usernameSelector.waitForDisplayed({ timeout: 30000 });
        await this.usernameSelector.setValue(username);

        await this.pinSelector.waitForDisplayed({ timeout: 30000 });
        await this.pinSelector.setValue(pinNum);

        await this.submitButtonSelector.click();       
    } 
    
    async loginExternal (username : string, password : string) {
        await this.usernameSelector.waitForDisplayed({ timeout: 30000 });
        await this.usernameSelector.setValue(username);

        await this.passwordSelector.waitForDisplayed({ timeout: 30000 });
        await this.passwordSelector.setValue(password);

        await this.submitButtonSelector.click();
    }

    get usernameSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get passwordSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get submitButtonSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get pinSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get basicValue () { return 'logging in' }
}

export default new Login;