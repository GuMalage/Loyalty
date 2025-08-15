export function adicionarItemCarrinho(event) {
    const produtoId = Number(event.target.getAttribute('data-id'));

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const produtoSelecionado = produtos.find(prod => prod.id === produtoId);

    if (!produtoSelecionado) {
        alert('Produto não encontrado!');
        return;
    }

    const itemNoCarrinho = carrinho.find(item => item.id === produtoId);

    if (itemNoCarrinho) {
        itemNoCarrinho.qtd += 1;
    } else {
        carrinho.push({ ...produtoSelecionado, qtd: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert('Produto adicionado ao carrinho!');
}