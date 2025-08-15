export function PaginaProdutoComponent(produto) {
    const precoFormatado = produto.preco.toFixed(2).replace(',', '.');
    const precoSemDescontoFormatado = produto.precoSemDesconto.toFixed(2).replace(',', '.');

    return `
    <section class="produto">
        <div class="imagem-produto">
            <img id="imagemPrincipal" src="${produto.img}" alt="${produto.nome}">
            <div class="subImagem-produto">
                <img class="subimagem" src="${produto.subImg1}" alt="${produto.nome}">
                <img class="subimagem" src="${produto.subImg2}" alt="${produto.nome}">
                <img class="subimagem" src="${produto.subImg3}" alt="${produto.nome}">
            </div>
        </div>
        <div class="informacoes">
            <div>
                <div>
                    <i class="fas fa-bolt desconto-cor"></i>
                    <small class="desconto-cor">Extra ${produto.desconto}% off</small>
                    <small class="desconto-stoque">Em Estoque</small>
                </div>
                <div class="nome-produto">
                    <h2>${produto.nome}</h2>
                </div>
                <div class="preco">
                    <p><s class="preco-desconto">R$ ${precoSemDescontoFormatado}</s></p>
                    <p class="preco-cor">R$${precoFormatado}</p>
                </div>
                <hr>
                <div class="conteudo">
                    <p>${produto.descricaoCurta}</p>
                </div>
            </div>
            <div class="guia-tamanhos">
                <small>Guia de Tamanhos</small>
                <p>${produto.tamanho}</p>
            </div>
            <div class="acoes">
                <button data-id="${produto.id}" class="btn-adicionar-carrinho w-100 mt-2">
                    Adicionar ao Carrinho
                </button>
            </div>
            <hr>
            <div class="frete-container">
                <div class="calcular-frete">
                    <div>
                      <input type="text" class="input-frete" id="cep" placeholder="Seu CEP">
                    </div>
                    <div>
                        <button type="submit" class="calcular-frete-button">Calcular Frete</button>
                    </div>
                </div>
                <div>
                    <p class="frete-link">Não sabe seu CEP? <a href="https://buscacepinter.correios.com.br/app/endereco/index.php">Buscar CEP</a></p>
                </div>
            </div>
    </section>

    <section class="descricao-avaliacao-container">
        <div class="descricao-titulo">
            <h2>Descrição</h2>
            <hr>
        </div>
        <div class="descricao-avaliacao">
            <div class="descricao">
                <p>${produto.descricaoLonga}</p>
            </div>
            <div class="avaliacao">
                <div class="avaliacao-principal">
                    <h3>${produto.nota}<span>/5</span></h3>
                    <div class="estrelas">★★★★★</div>
                    <p class="qnt-avaliacoes">${produto.qtdAvaliacoes} Avaliações</p>
                </div>
                <div>
                    <div class="avaliacao-linha">
                        <span>5</span>
                        <div class="barra">
                            <div class="barra-cor" style="width: 80%;"></div>
                        </div>
                        <div class="porcentagem">80%</div>
                    </div>
                    <div class="avaliacao-linha">
                        <span>4</span>
                        <div class="barra">
                            <div class="barra-cor" style="width: 10%;"></div>
                        </div>
                        <div class="porcentagem">10%</div>
                    </div>
                    <div class="avaliacao-linha">
                        <span>3</span>
                        <div class="barra">
                            <div class="barra-cor" style="width: 6%;"></div>
                        </div>
                        <div class="porcentagem">6%</div>
                    </div>
                    <div class="avaliacao-linha">
                        <span>2</span>
                        <div class="barra">
                            <div class="barra-cor" style="width: 3%;"></div>
                        </div>
                        <div class="porcentagem">3%</div>
                    </div>
                    <div class="avaliacao-linha">
                        <span>1</span>
                        <div class="barra">
                            <div class="barra-cor" style="width: 1%;"></div>
                        </div>
                        <div class="porcentagem">1%</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
