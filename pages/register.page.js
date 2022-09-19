// playwright-dev-page.js

exports.Register = class Register {

  /**
   * @param {import('@playwright/testSuiteLogin.spec.js').Page} page
   * @param {import('@playwright/testSuiteRegistration.spec.js').Page} page
   */
  constructor(page) {
    this.page = page;
    this.UserLogin = page.locator('#user_login');
    this.UserPassword = page.locator('#user_password');
    this.UserConfirmPassword = page.locator('#user_password_confirmation');
    this.UserFirstname = page.locator('#user_firstname');
    this.UserLastname = page.locator('#user_lastname');
    this.UserEmail = page.locator('#user_mail');
    this.UserIRCnick = page.locator('#user_custom_field_values_3');
    this.submitBtn = page.locator('[name="commit"]')
    this.ErrorExplanation = page.locator('#errorExplanation')
  }

  async userLoginFill(value){
    await this.UserLogin.fill(value)
  }
  async userLoginClick(){
    await this.UserLogin.click()
  }
  async userPasswordFill(value){
    await this.UserPassword.fill(value)
  }
  async userPasswordClick(){
    await this.UserPassword.click()
  }
  async userConfirmPasswordFill(value){
    await this.UserConfirmPassword.fill(value)
  }
  async userConfirmPasswordClick(){
    await this.UserConfirmPassword.click()
  }
  async userFirstnameFill(value){
    await this.UserFirstname.fill(value)
  }
  async userFirstnameClick(){
    await this.UserFirstname.click()
  }
  async userLastnameFill(value){
    await this.UserLastname.fill(value)
  }
  async userLastnameClick(){
    await this.UserLastname.click()
  }
  async userEmailFill(value){
    await this.UserEmail.fill(value)
  }
  async userEmailClick(){
    await this.UserEmail.click()
  }
  async userIRCnickFill(value){
    await this.UserIRCnick.fill(value)
  }
  async userIRCnickClick(){
    await this.UserIRCnick.click()
  }  
  async submitBtnClick(){
    await this.submitBtn.click()
  }
  async ErrorExplanationVisib(){
    await this.ErrorExplanation.tobeVisible()
  }
}