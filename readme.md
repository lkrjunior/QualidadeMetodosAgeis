Criterios de Aceite


Titulo	UsuarioNaoCadastrado
Dado	Que não estou cadastrado no site
Quando	informo email e senha
Então	exibi mensagem de "Authentication failed.".


Titulo	NãoPreencherEmailNoLogin
Dado	que estou efetuando o login	
Quando	não informo o email 
Então	exibi a mensagem "An email address required".


Titulo	NãoInformarSenhaNoLogin
Dado	que estou efetuando o login	
Quando	informo o email
E	não informo a senha
Então	exibi a mensagem "Password is required.".


Titulo	ValidandoUsuarioExistenteNoCadastro
Dado	que estou cadastrando o usuario
Quando	preencho o e-mail na tela de cadastro
E 	o e-mail já está cadastrado no site
Então	exibi a mensagem "An account using this email address has already been registered. Please enter a valid password or request a new one."


Titulo 	ObterMaisInformacoesSobreOProduto
Dado	que desejo obter mais informações sobre o produto
Quando	escolho o produto e clico no botão "More"
Então	deve abrir uma página com os detalhes do produto


Titulo 	AdicionarProdutoAoCarrinhoDeCompra
Dado	que quero adicionar um produto ao carrinho de compra
Quando	clico no botão "Add to card"
Então	abrir um pop up com a mensagem "Product successfully added to your shopping cart"


Titulo 	RemoverProdutoDoCarrinhoDeCompra
Dado	que quero remover um produto do carrinho de compra
Quando	seleciono o produto e removo
Então	o produto deve sumir do carrinho de compra


Titulo 	PesquisarUmProdutoNoSite
Dado	que desejo buscar por uma produto especifico no site
Quando	digito o nome do produto
Então	deve exibir uma página com os produtos que atendem o nome digitado no campo da pesquisa
