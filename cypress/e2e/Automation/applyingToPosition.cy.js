import user from '../../fixtures/user.data.amazon.json';
import HomePage from '../POM/HomePage';
import LoginPage from '../POM/LoginPage';

describe('Applying to QA position', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
  
    it('should apply to QA position', () => {
      homePage.visit();
      homePage.searchForJob('QA');
      homePage.enterLocation('USA');
      homePage.clickSearchButton();
      cy.wait(2000); //waiting to click second time, amazon's specific behaviour
      homePage.clickSearchButton();
      homePage.clickFirstJobResult();
      cy.contains('DESCRIPTION');
      homePage.clickApplyButton();

      cy.contains('Login with Amazon').click();
      loginPage.login(user.email, user.password);
      cy.contains('You have already applied for this position');
    });
  });