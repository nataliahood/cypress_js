
describe('Тестирование поиска вакансий на hh.ru', function () {

    it('Поиск по тексту "qa" выводит вакансии для тестировщиков', function () {
        cy.visit('https://kazan.hh.ru/');
        cy.get('.bloko-input').type('qa').type('{enter}');
        cy.contains('Тестировщик')
    })
})
