import loginPage from "../pageobjects/login.page"

describe('Funcionalidade: Login', () => {

    beforeEach(async () => {
        await loginPage.abrirMenu()
    })
    
    afterEach(async () => {
        await browser.relaunchActiveApp()
    })

    it('Deve fazer login com sucesso', async () => {
        await loginPage.preencheLogin('teste@teste.com', 'Enzo@12345')
        expect(await loginPage.mensagemAlerta()).toEqual('You are logged in!')
    })

    it('Não deve fazer login com email inválido', async () => {
        await loginPage.preencheLogin('123', 'Enzo@12345')
        await loginPage.mensagemErro('Please enter a valid email address')
    })

    it('Não deve fazer login com senha inválido', async () => {
        await loginPage.preencheLogin('teste@teste.com', '123')
        await loginPage.mensagemErro('Please enter at least 8 characters')
    })

    it('Não deve fazer login com todos os campos em branco', async () => {
        await loginPage.preencheLogin('', '')
        await loginPage.mensagemErro('Please enter a valid email address')
        await loginPage.mensagemErro('Please enter at least 8 characters')
    })
})