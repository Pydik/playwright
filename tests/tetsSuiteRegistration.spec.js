const { test, expect } = require('@playwright/test');
const { Register } = require('../pages/register.page.js');
const {randomInpute,randomEmail,randomPassword3} = require('../helper/helper');
const { HomePage } = require('../pages/home.page.js');
const { Login } = require('../pages/login.page.js');



test.describe('Registration', () => { 
  const randomLastname = randomInpute();    
  const randomPassword = randomInpute();
  const randomFirstname = randomInpute();
  const randomUsername = randomInpute();

  test.beforeEach(async({ page })  => {

   await page.goto("https://redmine.org/")
    
   })

test('Registration with valid credentials', async ({ page }) => {
  const register = new Register(page)
  const homePage = new HomePage(page)
  const login = new Login(page)
 //1. Click on "Регистрация" button
 await homePage.signupClick()
 //2. Enter valid data in all fields
 await register.userLoginFill(randomUsername)
 await register.userPasswordFill(randomPassword)
 await register.userConfirmPasswordFill(randomPassword)
 await register.userFirstnameFill(randomFirstname)
 await register.userLastnameFill(randomLastname)
 await register.userEmailFill(randomEmail())
 await register.userIRCnickFill(randomInpute())
 //3. Click on 'Принять'
 await register.submitBtnClick()
 //Expected result: A new login page is open with filled data
 //expect(await register.getErrorExplanation).toBeVisible();
 await expect(login.LoginBtn).toBeVisible();


});

test('Registration with invalid email', async ({ page }) => {
  const register = new Register(page)
  const homePage = new HomePage(page)
 //1. Click on "Регистрация" button
 await homePage.signupClick()
 //2. Enter valid data in all fields except email
 await register.userLoginFill(randomUsername)
 await register.userPasswordFill(randomPassword)
 await register.userConfirmPasswordFill(randomPassword)
 await register.userFirstnameFill(randomFirstname)
 await register.userLastnameFill(randomLastname)
 await register.userEmailFill(randomInpute())
 await register.userIRCnickFill(randomInpute())
 //3. Click on 'Принять'
 await register.submitBtnClick()
 //Expected result: Notification of invalid email
 await expect(register.ErrorExplanation).toBeVisible();
});

test('Registration with invalid password', async ({ page }) => {
  const register = new Register(page)
  const homePage = new HomePage(page)
 //1. Click on "Регистрация" button
 await homePage.signupClick()
 //2. Enter valid data in all fields except password
 await register.userLoginFill(randomUsername)
 await register.userConfirmPasswordFill(randomPassword)
 await register.userFirstnameFill(randomFirstname)
 await register.userLastnameFill(randomLastname)
 await register.userEmailFill(randomInpute())
 await register.userIRCnickFill(randomInpute())
 //3. Enter invalid data in password 
 await register.userPasswordFill(randomPassword3())
 //4. Click on 'Принять'
 await register.submitBtnClick()
 //Expected result: Notification of invalid password
 await expect(register.ErrorExplanation).toBeVisible();
});
});


 