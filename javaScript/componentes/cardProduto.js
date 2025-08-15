export function cardComponent(produto) {
    const precoFormatado = produto.preco.toFixed(2).replace(',', '.');
    const precoSemDescontoFormatado = produto.precoSemDesconto.toFixed(2).replace(',', '.');

    return `
    <div class="card border-0">
        <div class="position-relative">
            <a href="produto.html?id=${produto.id}" class="link-produto">
                <img src="${produto.img}" class="card-img-top" alt="${produto.nome}">
            </a>
            <span class="badge bg-danger position-absolute top-0 end-0 m-2">
                -${produto.desconto}%
            </span>
        </div>
        <div class="card-body p-2 card-hover">
            <a href="produto.html?id=${produto.id}" class="fw-bold link-produto">
                ${produto.nome}
            </a>
            <div class="progress mb-2" style="height: 6px;">
                <div class="progress-bar" style="width: 80%;"></div>
            </div>
            <p class="mb-1 fw-bold">
                <span class="text-decoration-line-through ms-1 preco-desconto-cor">
                   R$${precoSemDescontoFormatado}
                </span>&nbsp;
                <span class="preco">R$${precoFormatado}</span>
            </p>
            <div class="text-warning estrelas">
                ★★★★☆
            </div>
            <button data-id="${produto.id}" class="btn-adicionar-carrinho w-100 mt-2">
                Adicionar ao Carrinho
            </button>
        </div>
    </div>
    `;
}
