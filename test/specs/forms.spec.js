import formsPage from "../pageobjects/forms.page";

describe('Funcionalidade: Formulários', () => {

    beforeEach(async () => {
        await formsPage.abrirMenu()
    })

    it('Deve validar se o texto foi preenchido corretamente', async () => {
        const texto = 'Automação Appium'

        await formsPage.preencherTexto(texto)
        expect(await formsPage.validarTexto()).toEqual(texto)
    })

    it('Deve validar a seleção do dropdown', async () => {
        await formsPage.abrirDropDown()
        await expect(formsPage.dropDownLista).toBeDisplayed()

        const opcao = 'Appium is awesome'

        await formsPage.selecionarOpcao(opcao)
        expect(await formsPage.validarOpcao()).toEqual(opcao)

    })

    it('Deve trocar o switch de On para Off', async () => {
        //valida que inicia com o switch OFF e mensagem para deixar ON
        expect(await formsPage.validaSwitchTexto()).toEqual('Click to turn the switch ON')

        //chama metodo que muda para ON
        await formsPage.alterarSwith('on')
        //valida mensagem que o switch esta ON e pode ser alterado para OFF
        expect(await formsPage.validaSwitchTexto()).toEqual('Click to turn the switch OFF')
        await driver.pause(1000)
        
        //chama metodo e muda para OFF
        await formsPage.alterarSwith('off')
        expect(await formsPage.validaSwitchTexto()).toEqual('Click to turn the switch ON')
        await driver.pause(1000)

    })
})

