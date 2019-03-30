describe('automationpractice testes', function() {
	beforeEach(function() {
		browser.waitForAngularEnabled(false);
		browser.get('http://automationpractice.com');
	});
	
	it('Adicionar produto ao carrinho de compra', function() {
		$('#homefeatured > .ajax_block_product:nth-child(1) .button:nth-child(1) > span').click();
		browser.sleep(2000);
		
		expect($('.layer_cart_product > h2').getText()).toBe('Product successfully added to your shopping cart');
	});
	
	it('Remover produto do carrinho de compra', function() {
		$('#homefeatured > .ajax_block_product:nth-child(1) .button:nth-child(1) > span').click();
		browser.sleep(2000);
		
		$('.button-container > a').click();
		browser.sleep(2000);
		
		$('.cart_quantity_delete').click();
		browser.sleep(2000);
		
		expect($('.alert').getText()).toBe('Your shopping cart is empty.');
	});
	
	it('Não autenticar o usuário não cadastrado', function() {
		
		$('.login').click();
		browser.sleep(2000);
		
		$('#email').sendKeys('caio@gmail.com');
        $('#passwd').sendKeys('123456');
        $('#SubmitLogin').click();

        expect($('.alert-danger > ol > li').getText()).toEqual('Authentication failed.');	
	});
	
    it('Não autenticar sem o e-mail no login', function() {
		
        $('#passwd').sendKeys('123456');
        $('#SubmitLogin').click();

        expect($('.alert-danger > ol > li').getText()).toEqual('An email address required.');	
	});  
	
    it('Não autenticar sem a senha no login', function() {
		
        $('#email').sendKeys('caio@gmail.com');
        $('#SubmitLogin').click();

        expect($('.alert-danger > ol > li').getText()).toEqual('Password is required.');	
	});  
	
    it('Validando usuario existente no cadastro', function() {
		
        $('#email_create').sendKeys('caio@gmail.com');
        $('#SubmitCreate').click();

        expect($('.alert-danger > ol > li').getText()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one.');	
	});   
	
    it('Pesquisar um produto', function() {
		
		let pesquisa = 't-shirt';
        $('#search_query_top').sendKeys(pesquisa);
	    el = element(by.name('submit_search'));
		el.click();  	
		
		browser.sleep(2000);
		
		let numeroElementosPesquisa = element.all(by.css('.ajax_block_product')).count();
		
		expect(numeroElementosPesquisa).toBe(1);
	});    
  
	it('Visualizar detalhes do produto', function () {
		$('.product_list .lnk_view > span').click();

		expect($('.page-product-box > h3.page-product-heading').getText()).toEqual('DATA SHEET');
	});
	
	
});