
describe('Тестирование отображения в результатах поиска статьи с Википедия', function () {
   it('В результатах поиска по "котята" есть Википедия', function () {
        cy.visit('https://www.google.com/');
        cy.get('input.gLFyf').type('котята').type('{enter}');
        cy.contains('Википедия');
    })
})
