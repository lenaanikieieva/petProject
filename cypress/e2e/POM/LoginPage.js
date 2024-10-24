class LoginPage {
    login(email, password) {
      cy.origin('https://na.account.amazon.com', { args: { email, password } }, ({ email, password }) => {
        cy.get('[type="email"]').type(email);
        cy.get('[class="a-button a-button-span12 a-button-primary"]').click();
        cy.get('[type="password"]').type(password);
        cy.get('[type="submit"]').click();
      });
    }
  }
  
  export default LoginPage;