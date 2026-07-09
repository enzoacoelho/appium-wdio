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

    async validaSwitchTexto () {
        return await this.switchTexto.getText()

    }

}

export default new FormsPage()