class Login {
    constructor() {
        
    }

    /**
     * 
     * @param username - the username for logging into the app
     * @param password - the password for logging into the app
     */
    async loginOnline (username : string, password : string) {
        console.log ("Line 12");
        await this.usernameSelector.waitForDisplayed({ timeout: 60000 });
        console.log ("Line 13"+ this.usernameSelector);
        await this.usernameSelector.click();
        console.log ("Did i click Next button?");
        await this.usernameSelector.setValue(username);
        await this.submitButtonSelector.click();   

        await this.passwordSelector.waitForDisplayed({ timeout: 30000 }); 
        await (await this.passwordSelector).click();
        await this.passwordSelector.setValue(password);
        await this.submitButtonSelector.click();        
    }

    async loginAsOnline () {
        console.log('Logging in');
    }

    async loginOffline (username : string, pinNum : string) {
        await this.usernameSelector.waitForDisplayed({ timeout: 30000 });
        await this.usernameSelector.setValue(username);
        await this.submitButtonSelector.click();   

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

    get usernameSelector () { return $('android=new UiSelector().resourceId("email_input")') };
    get passwordSelector () { return $('android=new UiSelector().xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.EditText")') };
    //get submitButtonSelector () { return $('android=new UiSelector().xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.widget.Button")') };
    get submitButtonSelector () {return $('android=new UiSelector().textContains("Next")')};
    get pinSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get basicValue () { return 'logging in' }

    /*
    get usernameSelector () { return $('ios=new UiSelector().resourceId("(//XCUIElementTypeOther[@name="UBS"])[1]/XCUIElementTypeOther[4]/XCUIElementTypeOther[4]/XCUIElementTypeTextField")') };
    get passwordSelector () { return $('ios=new UiSelector().resourceId("(//XCUIElementTypeOther[@name="UBS"])[1]/XCUIElementTypeOther[4]/XCUIElementTypeOther[6]/XCUIElementTypeSecureTextField")') };
    get submitButtonSelector () { return $('ios=new UiSelector().resourceId("(//XCUIElementTypeButton[@name="Next"])[1]")') };
    get pinSelector () { return $('ios=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
  */

}

export default new Login;