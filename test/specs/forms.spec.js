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

    it.only('Deve trocar o switch de On para Off', async () => {
        expect(await formsPage.validaSwitchTexto()).toEqual('Click to turn the switch ON')
        const botao = $('~switch')

        //trocar para ON
        await botao.click()
        expect(await formsPage.validaSwitchTexto()).toEqual('Click to turn the switch OFF')
        await driver.pause(1000)
        
        //trocar para OFF
        await browser.swipe({
            direction: 'left',                  // Swipe from right to left
            duration: 5000,                     // Last for 5 seconds
            percent: 0.1,                       // Swipe 50% of the scrollableElement
            scrollableElement: botao,  // The element to swipe within
        })
        expect(await formsPage.validaSwitchTexto()).toEqual('Click to turn the switch ON')
        await driver.pause(1000)

    })
})

