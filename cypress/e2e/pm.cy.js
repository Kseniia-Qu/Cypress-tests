describe('ПМ', function () {
    it('Зайти в раздел Диваны', function () {
      cy.visit('https://spb.pm.ru/');
      cy.get(':nth-child(1) > .filter-secondary__lnk > .filter-secondary__category').click(); 
      cy.get(':nth-child(1) > .popular-filter-item').click();
      cy.get('[style="order: 1;"] > .good__item > .good__link-wrapper > :nth-child(3) > .good__title').click();
      cy.get('.add-to-cart-button').click();
      cy.get('.counter-more').click();
      cy.get('.continue > a').click;
      cy.visit('https://spb.pm.ru/cart/');
      cy.get('.basket-order__button').click();
      cy.contains('Оформление заказа');
    })
    
 })
  