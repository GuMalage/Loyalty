import { cardComponent } from "./componentes/cardProduto.js";
import { adicionarItemCarrinho } from "./adicionarItemCarrinho.js";
import { carregarProdutos } from "./carregarProdutos.js";

export async function renderizarProdutos() {
    const container = document.getElementById('produtosContainer');
    container.innerHTML = '';

    const produtos = await carregarProdutos();

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.innerHTML = cardComponent(produto);

        const botaoAdicionar = card.querySelector('.btn-adicionar-carrinho');
        botaoAdicionar.addEventListener('click', adicionarItemCarrinho);

        container.appendChild(card);
    });
}