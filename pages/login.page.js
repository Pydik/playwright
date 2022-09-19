// playwright-dev-page.js

exports.Login = class Login {

  /**
   * @param {import('@playwright/testSuiteLogin.spec.js').Page} page
   * @param {import('@playwright/testSuiteRegistration.spec.js').Page} page
   */
  constructor(page) {
    this.page = page;
    this.Username = page.locator('[name="username"]')
    this.Password = page.locator('[name="password"]')
    this.LoginBtn = page.locator('[name="login"]')
    this.Flasherror1 = page.locator('[class="flash error"]')
    this.Flasherror2 = page.locator('[class="flash error"]')
  }
  async usernameFill(value){
    
    await this.Username.fill(value) 
  }
  async usernameClick(){
    await this.Username.click()
  }
  async passwordFill(value){
    await this.Password.fill(value)
  }
  async passwordClick(){
    await this.Password.click()
  }
  async loginBtnClick(){
    await this.LoginBtn.click()
  }
  async flasherror1Visible(){
    await this.Flasherror.tobeVisible()
  }
  async Flasherror2Visible(){
    await this.Flasherror.tobeVisible()
  }
  
}