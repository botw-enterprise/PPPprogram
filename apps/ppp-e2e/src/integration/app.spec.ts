import {hasBrand, q1, q1Lab, q1Req, q1Sel, q3, q3Inp, q3Lab, q3Req} from '../support/app.po';

describe('ppp', () => {
  before(() => cy.visit('/'));

  it('should have Organization banner', () => {
    hasBrand().find('img')
      .should('have.attr', 'src')
      .should("include", "../assets/images/logo_220x50.png");
  });

  it('should check q1', () => {
    q1Lab().contains('Business Type');
    q1Sel().focus();
    cy.get('body').click();
    q1Req().contains('This field is required');
  });

  it('should contain all provided options', () => {
    q1().click().get('mat-option').contains('Sole proprietor').click();
    q1().click().get('mat-option').contains('Partnership').click();
    q1().click().get('mat-option').contains('C-Corp').click();
    q1().click().get('mat-option').contains('S-Corp').click();
    q1().click().get('mat-option').contains('LLC').click();
    q1().click().get('mat-option').contains('Independent contractor').click();
    q1().click().get('mat-option').contains('Eligible self-employed individual').click();
    q1().click().get('mat-option').contains('501(c)(3) nonprofit').click();
    q1().click().get('mat-option').contains('501(c)(19) veterans organization').click();
    q1().click().get('mat-option').contains(' Tribal business (sec. 31(b)(2)(C) of Small Business Act) ').click();
  });

  it('should say q3 is required', () => {
    q3Lab().contains('Business Legal Name');
    q3Inp().focus();
    q1Sel().focus();
    q3Req().contains('This field is required');
    q3().type('Test business legal name');
    q3Req().should('not.exist');
  });
});
