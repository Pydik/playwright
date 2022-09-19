// playwright-dev-page.js

exports.HomePage = class HomePage {

    /**
    * @param {import('@playwright/testSuiteLogin.spec.js').Page} page
    * @param {import('@playwright/testSuiteRegistration.spec.js').Page} page
     */
    constructor(page) {
      this.page = page;
      this.signin = page.locator('.login')
      this.signup = page.locator('.register')
    }
    async signinClick(){
    
        await this.signin.click() 
      }
      
    async signupClick(){
    
    await this.signup.click() 
    }
  }