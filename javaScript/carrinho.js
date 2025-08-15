async function carregarCarrinhoDoLocalStorage() {
    const carrinho = localStorage.getItem('carrinho');
    if (carrinho) {
        try {
            return JSON.parse(carrinho);
        } catch (error) {
            console.error('Erro ao carregar carrinho do localStorage:', error);
            return [];
        }
    } else {
        return [];
    }
}

export async function renderizarCarrinho() {
    const carrinho = await carregarCarrinhoDoLocalStorage();
    const container = document.getElementById('carrinhoContainer');
    if (!container) {
        console.error('Elemento carrinhoContainer não encontrado no DOM.');
        return;
    }
    container.innerHTML = '';

    let quantidadeTotal = 0;

    carrinho.forEach(produto => {
    const preco = Number(produto.preco);
    const subtotal = preco * produto.qtd;
    quantidadeTotal += produto.qtd;

    const precoFormatado = preco.toFixed(2).replace('.', '.');
    const subtotalFormatado = subtotal.toFixed(2).replace(',', '.');

    const item = document.createElement('div');
    item.classList.add('carrinho-item');
    item.innerHTML = `
        <img src="${produto.img}" alt="${produto.nome}">
        <div>
            <h4>${produto.nome}</h4>
            <p>Preço unitário: R$ ${precoFormatado}</p>
            <div class="quantidade">
                <button class="btn-diminuir" data-id="${produto.id}">-</button>
                <span>${produto.qtd}</span>
                <button class="btn-aumentar" data-id="${produto.id}">+</button>
            </div>
            <p><strong class="subtotal">Subtotal: R$ ${subtotalFormatado}</strong></p>
        </div>
        <button class="btn-remover">
            <i class="fas fa-trash btn-remover-i" data-id="${produto.id}"></i>
        </button>
          `;
        container.appendChild(item);
    });


    document.querySelectorAll('.btn-remover-i').forEach(btn => {
        btn.addEventListener('click', removerItemCarrinho);
    });

    document.querySelectorAll('.btn-aumentar').forEach(btn => {
        btn.addEventListener('click', aumentarQuantidade);
    });

    document.querySelectorAll('.btn-diminuir').forEach(btn => {
        btn.addEventListener('click', diminuirQuantidade);
    });

    const quantidadeItensNoDOM = document.querySelectorAll('.carrinho-item').length;

    const textoItem = quantidadeItensNoDOM === 1 ? 'item' : 'itens';

    const contador = document.getElementById('quantidadeItens');
    if (contador) {
        contador.textContent = `(${quantidadeItensNoDOM} ${textoItem})`;
    }

    const contadorResumo = document.getElementById('contadorResumoItens');
    if (contadorResumo) {
        contadorResumo.textContent = `(${quantidadeItensNoDOM} ${textoItem})`;
    }

    atualizarTotal();
}

async function removerItemCarrinho(evento) {
    const id = Number(evento.target.getAttribute('data-id'));
    let carrinho = await carregarCarrinhoDoLocalStorage();

    const produto = carrinho.find(prod => prod.id === id);

    const confirmacao = confirm(`Você quer remover "${produto.nome}" do carrinho?`);
    if (!confirmacao) {
        return; 
    }

    carrinho = carrinho.filter(prod => prod.id !== id);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
}


async function aumentarQuantidade(evento) {
    const id = Number(evento.target.getAttribute('data-id'));
    const carrinho = await carregarCarrinhoDoLocalStorage();

    const produto = carrinho.find(prod => prod.id === id);
    if (produto) {
        produto.qtd += 1;
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
}

async function diminuirQuantidade(evento) {
    const id = Number(evento.target.getAttribute('data-id'));
    let carrinho = await carregarCarrinhoDoLocalStorage();

    const produto = carrinho.find(prod => prod.id === id);
    if (produto) {
        if (produto.qtd === 1) {
            const confirmacao = confirm(`Você quer remover "${produto.nome}" do carrinho?`);
            if (!confirmacao) {
                return; 
            }
        }

        produto.qtd -= 1;

        if (produto.qtd <= 0) {
            carrinho = carrinho.filter(prod => prod.id !== id);
        }
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    renderizarCarrinho();
}


async function atualizarTotal() {
    const carrinho = await carregarCarrinhoDoLocalStorage();
    let total = carrinho.reduce((acc, prod) => acc + prod.preco * prod.qtd, 0);

    const totalCarrinhoElem = document.getElementById('totalCarrinho');

    if (totalCarrinhoElem) totalCarrinhoElem.textContent = `R$ ${total.toFixed(2)}`;
}