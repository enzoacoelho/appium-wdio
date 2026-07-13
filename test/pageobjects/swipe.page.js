class SwipePage {

    get menuSwipe() { return $('~Swipe') }
    get wdioLogo() { return $('~WebdriverIO logo') }
    get textoFinal() { return $('//android.widget.ImageView[@content-desc="WebdriverIO logo"]/following-sibling::android.widget.TextView') }

    card(indice) { return $(`//android.view.ViewGroup[@resource-id="__CAROUSEL_ITEM_${indice}__"]/android.view.ViewGroup[@content-desc="card"]`) }

    async abrirMenu() {
        await this.menuSwipe.click();
    }

    async arrastarParaBaixo() {
        await driver.swipe('down')
    }
    async arrastarComCoordenadas(origem, destino) {
        await driver.action('pointer')
            .move({ duration: 0, x: origem.x, y: origem.y })
            .down({ button: 0 })
            .move({ duration: 1000, x: destino.x, y: destino.y })
            .up({ button: 0 })
            .perform();
    }

    async arrastarCardParaLado(indice, direcao = 'left') {
        const cardAtual = this.card(indice);

        await cardAtual.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: `Card ${indice} não apareceu antes do swipe`
        });

        await browser.swipe({
            direction: direcao,
            duration: 2000,
            percent: 0.5,
            scrollableElement: cardAtual,
        });
    }

    async mensagem(texto) {
        const elemento = $(`//android.widget.TextView[@text="${texto}"]`)
        await expect(elemento).toHaveText(texto)
    }
}

export default new SwipePage();