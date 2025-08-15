import { PaginaProdutoComponent } from './componentes/paginaProduto.js';
import { adicionarItemCarrinho } from './adicionarItemCarrinho.js';
import { carregarProdutos } from './carregarProdutos.js';

async function EncontrarProdutoPorId(id) {
    const produtos = await carregarProdutos();
    const produtoSelecionado = produtos.find(prod => prod.id === id);

    if (!produtoSelecionado) {
        alert('Produto não encontrado!');
        return null;
    }

    return produtoSelecionado;
}

export async function renderizarPaginaProdutos() {
    const container = document.getElementById('pagina-do-produto');
    container.innerHTML = '';

    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = Number(urlParams.get('id'));

    const produto = await EncontrarProdutoPorId(produtoId);

    if (!produto) {
        container.innerHTML = '<p>Produto não encontrado.</p>';
        return;
    }

    const card = document.createElement('div');
    card.innerHTML = PaginaProdutoComponent(produto);

    const botaoAdicionar = card.querySelector('.btn-adicionar-carrinho');
    botaoAdicionar.addEventListener('click', adicionarItemCarrinho);

    container.appendChild(card);

    const subimagens = card.querySelectorAll('.subimagem');
    const imagemPrincipal = card.querySelector('#imagemPrincipal');

    subimagens.forEach(subImg => {
        subImg.addEventListener('click', () => {
            const srcTemp = imagemPrincipal.src;
            imagemPrincipal.src = subImg.src;
            subImg.src = srcTemp;
        });
    });

}
