class HomePage {
    visit() {
      cy.visit('/');
    }
  
    searchForJob(jobTitle) {
      cy.get('[data-react-class="SearchInput"]').type(jobTitle);
    }
  
    enterLocation(location) {
      cy.get('[class="undefined form-control tt-input"]').type(location);
    }
  
    clickSearchButton() {
      cy.get('[class="btn location-search form-control"]').click();
    }
  
    clickFirstJobResult() {
      cy.get('[class="job-link"]').eq(0).click();
    }
  
    clickApplyButton() {
      cy.get('[id="apply-button"]').click();
    }
  }
  
  export default HomePage;