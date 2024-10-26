import user from '../../fixtures/user.data.amazon.json';
import HomePage from '../POM/Home.Page';
import LoginPage from '../POM/Login.Page';

describe('Applying to QA position', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
  
    it('should apply to QA position', () => {
      cy.visit('/');
      homePage.searchForJob('QA');
      homePage.enterLocation('USA');
      homePage.clickSearchButton();
      homePage.clickSearchButton();
      homePage.clickFirstJobResult();
      cy.contains('DESCRIPTION');
      homePage.clickApplyButton();

      cy.contains('Login with Amazon').click();
      loginPage.login(user.email, user.password);
      cy.contains('You have already applied for this position');
    });
  });