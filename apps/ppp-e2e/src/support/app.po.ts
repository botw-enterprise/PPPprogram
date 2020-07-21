export const hasBrand = () => cy.get('.ppp-botw-logo-parent > .logoImg');

export const q1 = () => cy.get('#qid1');
export const q1Sel = () => cy.get('#sSelect-qid1');
export const q1Lab = () => cy.get('#sLabel-qid1');
// Error Blocks
export const q1Req = () => cy.get('#sRequired-qid1');
export const q1Min = () => cy.get('#sMinimum-qid1');
export const q1Max = () => cy.get('#sMaximum-qid1');

export const q3 = () => cy.get('#qid3');
export const q3Inp = () => cy.get('#tfInput-qid3');
export const q3Lab = () => cy.get('#tfLabel-qid3');
// Error Blocks
export const q3Req = () => cy.get('#tfRequired-qid3');
export const q3Min = () => cy.get('#tfMinimum-qid3');
export const q3Max = () => cy.get('#tfMaximum-qid3');
