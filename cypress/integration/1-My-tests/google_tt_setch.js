
describe('Тестирование отображения блока TicTok в результатах поска google.com', function () {
   it('Поиск по "котята" выводит блок видео с TicTok', function () {
        cy.visit('https://www.google.com/');
        cy.get('input.gLFyf').type('котята').type('{enter}');
        cy.contains('Видео с хэштегом #котята');
    })
})
