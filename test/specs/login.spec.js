describe('Funcionalidade: Login', () => {

    it('Deve fazer login com sucesso', async () => {
        await $('~Login').click()
        await $('~input-email').setValue('teste@teste.com')
        await $('~input-password').setValue('Enzo@12345')
        await $('~button-LOGIN').click()        

        expect(await $('id=android:id/message')).toBeDisplayed()
        //await driver.acceptAlert()
        const okButton = await $('id=android:id/button1')        
        await okButton.click()
    })

     it('Não deve fazer login com email inválido', async () => {
        await $('~Login').click()
        await $('~input-email').setValue('123')
        await $('~input-password').setValue('Enzo@12345')
        await $('~button-LOGIN').click()  
        
        const mensagem = await $('//android.widget.TextView[@text="Please enter a valid email address"]')

        expect(mensagem).toBeDisplayed()
    })
})