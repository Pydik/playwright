const { test, expect } = require('@playwright/test');
const { Login } = require('../pages/login.page.js');
const {randomInpute,randomEmail, randomPassword3} = require('../helper/helper');
const { HomePage } = require('../pages/home.page.js');


test.describe('Registration', () => { 


  test.beforeEach(async({ page })  => {

    await page.goto("https://redmine.org/")
    
   })

test('Login with valid credentials', async ({ page }) => {
  const homePage = new HomePage(page)
  const login = new Login(page)
 //1.Click on "Войти" button
 await homePage.signinClick()
 //2.Enter valid data in all fields
 await login.usernameClick()
 await login.usernameFill('user1001')
 await login.passwordClick()
 await login.passwordFill('1111')
 //3.Click on "Вход>>" button
 await login.loginBtnClick()
 //Expected result: Message about inactivated mail'
 //expect(page.locator('[class="flash error"]')).to
 await expect(login.Flasherror2).toBeVisible();
});

test('Login with invalid login', async ({ page }) => {
  const homePage = new HomePage(page)
  const login = new Login(page)
 //1. Click on "Войти" button
 await homePage.signinClick()
 //2. Enter invalid data in 'Пользователь' field
 await login.usernameFill(randomInpute())
 //3. Enter valid data in 'Пароль' field
 await login.passwordFill('1111')
 //4. Click on "Вход>>" button
 await login.loginBtnClick()
 //Expected result: Notification of invalid password or user
 //expect(await login.Flasherror1).toBeVisible
 await expect(login.Flasherror1).toBeVisible();
});

test('Login with invalid password', async ({ page }) => {
  const homePage = new HomePage(page)
  const login = new Login(page)
 //1. Click on "Войти" button
 await homePage.signinClick()
 //2. Enter valid data in 'Пользователь' field
 await login.usernameFill('user1001')
 //3. Enter invalid data in 'Пароль' field
 await login.passwordFill(randomPassword3())
 //4. Click on "Вход>>" button
 await login.loginBtnClick()
 //Expected result: Notification of invalid password or user
 await expect(login.Flasherror1).toBeVisible();
});
})

 