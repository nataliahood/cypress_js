describe('Тестирование добавления товаров в корзину wildberries.ru', function () {
    it('Дохожу до корзины в wildberries', function () {
        cy.visit('https://www.wildberries.ru/');
        cy.get('#searchInput').click();
        cy.get('#searchInput').type('macbook').type('{enter}', {timeout: 10000});
        cy.contains('Ноутбук Apple');
        cy.get('#c44949514 .product-card__main.j-card-link').trigger('mouseover');
        cy.get('#c44949514 .btn-main-sm.j-add-to-basket').click({timeout: 100000});
        cy.get('[data-wba-header-name="Cart"]').click();
        cy.contains('Заказать')
    })
})
