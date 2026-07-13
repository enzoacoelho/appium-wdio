import swipePage from "../pageobjects/swipe.page"
// Referência: https://webdriver.io/docs/api/mobile/swipe/

describe('Dicas da tela Swipe', () => {

    beforeEach(async () => {
        await swipePage.abrirMenu();
    });

    afterEach(async () => {
        await driver.back();
        await driver.pause(3000);
    });

    it.skip('Deve arrastar para baixo', async () => {
        await swipePage.arrastarParaBaixo()
        await expect(swipePage.wdioLogo).toBeDisplayed()
    });

    it('Deve navegar por todos os cards do carrossel arrastando pro lado', async () => {
    // Como pedido, mapeamos os textos esperados de cada card pelo seu índice (0 a 4)
    const dadosDosCards = [
        {
            titulo: 'FULLY OPEN SOURCE',
            descricao: 'WebdriverIO is fully open source and can be used for any commercial or non-commercial project.'
        },
        {
            titulo: 'GREAT COMMUNITY',
            descricao: 'We have an active and helpful community on Discord and GitHub.'
        },
        {
            titulo: 'JS FOUNDATION',
            descricao: 'WebdriverIO is a proud member of the OpenJS Foundation.'
        },
        {
            titulo: 'SUPPORTIVE',
            descricao: 'It supports modern web technologies like Shadow DOM, Web Components and more.'
        },
        {
            titulo: 'COMPATIBLE',
            descricao: 'WebdriverIO works in combination with most of the TDD and BDD test frameworks in the JavaScript world.'
        }
    ];

    for (let indice = 0; indice < dadosDosCards.length; indice++) {
        // 1. Executa o swipe para o lado
        await swipePage.arrastarCardParaLado(indice, 'left');

        // 2. Se não for o último card, espera o próximo carregar
        if (indice < dadosDosCards.length - 1) {
            const proximoCard = swipePage.card(indice + 1);
            await proximoCard.waitForDisplayed({
                timeout: 3000,
                timeoutMsg: `Card ${indice + 1} não apareceu após o swipe`
            });
        }

        // 3. Valida os textos dinamicamente usando os dados do array
        const cardAtual = dadosDosCards[indice];
        
        // Passa o texto dinâmico esperado para os seus métodos de validação
        await swipePage.mensagem(cardAtual.titulo);
        await swipePage.mensagem(cardAtual.descricao);
    }
});

});