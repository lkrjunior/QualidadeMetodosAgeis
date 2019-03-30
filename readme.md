Criterios de Aceite


Titulo	UsuarioNaoCadastrado<br>
Dado	Que não estou cadastrado no site<br>
Quando	informo email e senha<br>
Então	exibi mensagem de "Authentication failed.".<br>


Titulo	NãoPreencherEmailNoLogin<br>
Dado	que estou efetuando o login<br>
Quando	não informo o email<br>
Então	exibi a mensagem "An email address required".<br>


Titulo	NãoInformarSenhaNoLogin<br>
Dado	que estou efetuando o login	<br>
Quando	informo o email<br>
E	não informo a senha<br>
Então	exibi a mensagem "Password is required.".<br>


Titulo	ValidandoUsuarioExistenteNoCadastro<br>
Dado	que estou cadastrando o usuario<br>
Quando	preencho o e-mail na tela de cadastro<br>
E 	o e-mail já está cadastrado no site<br>
Então	exibi a mensagem "An account using this email address has already been registered. Please enter a valid password or request a new one."<br>


Titulo 	ObterMaisInformacoesSobreOProduto<br>
Dado	que desejo obter mais informações sobre o produto<br>
Quando	escolho o produto e clico no botão "More"<br>
Então	deve abrir uma página com os detalhes do produto<br>


Titulo 	AdicionarProdutoAoCarrinhoDeCompra<br>
Dado	que quero adicionar um produto ao carrinho de compra<br>
Quando	clico no botão "Add to card"<br>
Então	abrir um pop up com a mensagem "Product successfully added to your shopping cart"<br>


Titulo 	RemoverProdutoDoCarrinhoDeCompra<br>
Dado	que quero remover um produto do carrinho de compra<br>
Quando	seleciono o produto e removo<br>
Então	o produto deve sumir do carrinho de compra<br>


Titulo 	PesquisarUmProdutoNoSite<br>
Dado	que desejo buscar por uma produto especifico no site<br>
Quando	digito o nome do produto<br>
Então	deve exibir uma página com os produtos que atendem o nome digitado no campo da pesquisa<br>
