class FormsPage {

    get menuForms() { return $('~Forms') }
    get campoTexto() { return $('~text-input') }
    get labelResultado() { return $('~input-text-result') }
    get switch() { return $('~switch') }
    get switchTexto() { return $('~switch-text') }
    get dropDown() { return $("-android uiautomator:new UiSelector().resourceId(\"text_input\")") }
    get dropDownLista() { return $('id=com.wdiodemoapp:id/select_dialog_listview') }

    async abrirMenu() {
        await this.menuForms.click()
    }

    async preencherTexto(texto) {
        await this.campoTexto.addValue(texto)
    }

    async validarTexto() {
        return await this.labelResultado.getText()
    }

    async abrirDropDown() {
        await this.dropDown.click()
    }

    async selecionarOpcao(opcao) {
        const item = $(`-android uiautomator:new UiSelector().text(\"${opcao}\")`)
        await item.click()
    }

    async validarOpcao() {
        return await this.dropDown.getText()
    }

    async validaSwitchTexto() {
        return await this.switchTexto.getText()

    }

    async alterarSwith(estado) {

        const botao = await this.switch

        if (estado === 'on') {
            await browser.swipe({
                direction: 'right',
                duration: 5000,
                percent: 0.1,
                scrollableElement: botao,
            })

        } else if (estado === 'off') {
            await browser.swipe({
                direction: 'left',
                duration: 5000,
                percent: 0.1,
                scrollableElement: botao,
            })
        }

    }
}

export default new FormsPage()