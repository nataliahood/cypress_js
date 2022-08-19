
describe('Тестирование авторизации в staya', function () {
    
    it('Тест авторизации с валидным логином и паролем', function () {
        cy.fixture('test_data_staya').then((data) => {
            cy.visit('https://staya.dog/login');
            cy.get('#__layout [data-v-3fa00444][type="email"]').type(data.email);
            cy.get('#__layout [data-v-3fa00444][type="password"]').type(data.password);
            cy.get('#__layout .auth-form__submit').click()
            cy.wait(3000);
            cy.contains('Мои заказы')
        })
    })

     it('Тест авторизации с невалидным логином и паролем', function () {
        cy.fixture('test_data_staya').then((data) => {
            cy.visit('https://staya.dog/login');
            cy.get('#__layout [data-v-3fa00444][type="email"]').type(data.none_existen_email);
            cy.get('#__layout [data-v-3fa00444][type="password"]').type(data.none_existen_password);
            cy.get('#__layout .auth-form__submit').click();
            cy.wait(1000);
            cy.contains('Невозможно войти с предоставленными учетными данными')
        })
    })
})
