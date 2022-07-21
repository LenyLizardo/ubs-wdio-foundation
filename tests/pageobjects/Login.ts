import { release } from "os";

class Login {
    constructor() {
        
    }

    /**
     * 
     * @param username - the username for logging into the app
     * @param password - the password for logging into the app
     */
    async loginOnline (username : string, password : string) {

        console.log('Login Begins')

     
      let contexts = await driver.getContexts();
        console.log(contexts);
        await driver.switchContext(contexts [0]);
        //await driver.switchContext('WEBVIEW_1');  

        console.log ("Line 12");
        //console.log($(''))
       // console.log($())
        let userSel = await this.usernameSelector();
        //console.log(userSel)
        await userSel.waitForDisplayed({ timeout: 30000 });
        //console.log ("Line 13"+ this.usernameSelector);
        await userSel.click();
       //await this.usernameSelector.click();
        //console.log ("Did i click Next button?");
       //await this.usernameSelector.setValue(username);
       await userSel.setValue(username);

       let submitBtnSel = await this.submitButtonSelector();
       await submitBtnSel.waitForDisplayed ({timeout: 30000});
       await submitBtnSel.click();  
      
       await driver.touchAction([
        {action: 'press', x: 152, y: 165},
        {action: 'moveTo', x: 139, y: 654},
        {action: 'release'},
        {action: 'wait',ms: 1000}]);
    
      

       let passSel = await this.passwordSelector();
       await passSel.waitForDisplayed({timeout: 30000});
       await passSel.click();
       await passSel.setValue (password);

       let submitBtnSelPwd = await this.submitButtonSelectPwd();
       await submitBtnSelPwd.waitForDisplayed ({timeout: 30000});
       await submitBtnSelPwd.click();  
       

     await driver.touchAction([
        {action: 'press', x: 152, y: 165},
        {action: 'moveTo', x: 139, y: 654},
        {action: 'release'},
        {action: 'wait',ms: 1000}
      ]); 



      let pinSel = await this.pinSelector();
      await pinSel.waitForDisplayed({timeout: 3000});
      await pinSel.click();
       //await pinSel.setValue(pin);
       /* await this.passwordSelector.waitForDisplayed({ timeout: 30000 }); 
        await (await this.passwordSelector).click();
        await this.passwordSelector.setValue(password);
        await this.submitButtonSelector.click();        */

        await driver.switchContext(contexts [0]);
    }

    async loginAsOnline () {
        console.log('Logging in');
    }
/*
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
*/
    //get usernameSelector () { return $('android=new UiSelector().xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.widget.EditText")') };

    //async usernameSelector () { return await $('android=new UiSelector().packageName("com.ubs.neo.fx.qa2").className("android.widget.EditText")')};
    //async usernameSelector () { return await $('android=new UiSelector().resourceIdMatches("com.ubs.neo.fx.qa2:id/email_input")')};
    //async usernameSelector () { return await $('android=new UiSelector().packageName("com.ubs.neo.fx.qa2").resourceId("email_input")')};
    //async  usernameSelector () { return await $('android=new UiSelector().id("email_input")')};
    //async  usernameSelector () { return ($('~android.widget.EditText')) };
    //async  usernameSelector () { return ($('~email_input')) };
    
    async usernameSelector () {return $(await driver.findElement('xpath','(//XCUIElementTypeOther[@name=\"UBS\"])[1]/XCUIElementTypeOther[4]/XCUIElementTypeOther[4]/XCUIElementTypeTextField'))};
    async passwordSelector () {return $(await driver.findElement('xpath','(//XCUIElementTypeOther[@name="UBS"])[1]/XCUIElementTypeOther[4]/XCUIElementTypeOther[6]/XCUIElementTypeSecureTextField'))};
    async submitButtonSelector () {return $(await driver.findElement('xpath','(//XCUIElementTypeButton[@name="Next"])[1]'))};
    async submitButtonSelectPwd () {return $(await driver.findElement('xpath','(//XCUIElementTypeButton[@name="Next"])[1]'))};
    async pinSelector () {return $(await driver.findElement('xpath','(//XCUIElementTypeOther[@name="UBS"])[1]/XCUIElementTypeOther[4]/XCUIElementTypeOther[6]/XCUIElementTypeTextField'))};

     //get usernameSelector () { return $('android.widget.EditText') };
    //get usernameSelector () {return($('UiSelector().resourceId (email_input)')) } ;
    //get usernameSelector () { return $('android=new UiSelector().className("android.widget.EditText")') };
    //get passwordSelector () { return $('android=new UiSelector().xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.EditText")') };
    //get submitButtonSelector () { return $('android=new UiSelector().xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.widget.Button")') };
    //get submitButtonSelector () {return $('android=new UiSelector().textContains("Next")')};
    //get pinSelector () { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
    get basicValue () { return 'logging in' }

    /*
    get usernameSelector () { return $('ios=new UiSelector().resourceId("(//XCUIElementTypeOther[@name="UBS"])[1]/XCUIElementTypeOther[4]/XCUIElementTypeOther[4]/XCUIElementTypeTextField")') };
    get passwordSelector () { return $('ios=new UiSelector().resourceId("(//XCUIElementTypeOther[@name="UBS"])[1]/XCUIElementTypeOther[4]/XCUIElementTypeOther[6]/XCUIElementTypeSecureTextField")') };
    get submitButtonSelector () { return $('ios=new UiSelector().resourceId("(//XCUIElementTypeButton[@name="Next"])[1]")') };
    get pinSelector () { return $('ios=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') };
  */

}

export default new Login;