describe('Timesheet', () => {
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('login HRStop', () => {
    cy.visit('https://ccube.hrstop.com');
    cy.get('#Email').type('akash.p@ccube.com');
    cy.get('#Password').type('Akash@#4321');
    cy.get('button[type="submit"]').click();
    cy.get("a[title='View, submit and manage your timesheets']").click();
    cy.get("a[title='View and manage time sheet']").click();



    const timesheetData = [
    { project: 'OneSky (meeting)', task: 'Scrum', hours: '0.5' },
    { project: 'Diamond Standard', task: 'Scrum', hours: '0.5' },
    { project: 'OneSky', task: 'Development', hours: '3' },
    { project: 'Diamond Standard', task: 'Development', hours: '4' },
    { project: 'Diamond Standard', task: 'Standup', hours: '0.5' },
    { project: 'OneSky (meeting)', task: 'Standup', hours: '0.5' },
  ];
    
timesheetData.forEach((row, index) => {
  
  cy.get(`#select2-ddlProject_${index + 1}-container`).click({ force: true });

  
  cy.get('.select2-search__field').type(row.project, { force: true });

  
  cy.get('.select2-results__option--highlighted').click({ force: true });

  
  cy.get(`[name="tblProjectTitle_${index + 1}"]`).clear().type(row.task);

  
  cy.get(`[name="tblProjectHour_${index + 1}"]`).clear().type(row.hours);
});

  


    
  });
});
