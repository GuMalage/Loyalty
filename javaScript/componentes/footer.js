export class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
       <section>
          <div class="banner-rodape">
            <img src="img/imgExtras/banner-rodape.jpg" alt="Muro de Tijolos">
            <div>
              <p class="texto-banner-rodape">
                <a href="#">Siga-nos no Instagram: @Loyalty_Decor</a>
              </p>
            </div>
          </div>
        </section>
        
        <section class="cadastro-email">
          <p>Cadastre-se e não perca <br>as novidades da Loyalty!</p>
          <div class="email-desconto">
            <input type="email" id="email" name="email" placeholder="Insira seu e-mail">
            <label for="email">Inscrever-se</label>
          </div>
        </section>
        <hr class="linha-rodape">
        <section class="rodape">
          <div class="informacoes-contato">
            <div>
              <div class="politicas">
                <img src="img/imgLogo/logo-fundo.png" alt="Logo Loyalty">
                <div class="politica-hover">
                  <a href="">Institucional</a>
                </div>
                <div class="politica-hover">
                  <a href="">Dúvidas</a>
                </div>
                <div class="politica-hover">
                  <a href="">Política De Privacidade</a>
                </div>
              </div>
            </div>

            <div class="forma-pagamento">
              <img src="img/imgsFormaPagamento/visa@2x.png" alt="Visa">
              <img src="img/imgsFormaPagamento/mastercard@2x.png" alt="MasterCard">
              <img src="img/imgsFormaPagamento/boleto@2x.png" alt="Boleto">
              <img src="img/imgsFormaPagamento/pix@2x.png" alt="Pix">
            </div>
          </div>

          <div class="redes-sociais">
            <div>
              <h2>SIGA-NOS:</h2>
            </div>
            <div class="icones-flex">
              <div class="icones">
                <a href=""><i class="fab fa-facebook-f cor-tamanho-icone"></i></a>
              </div>
              <div class="icones">
                <a href=""><i class="fab fa-instagram cor-tamanho-icone"></i></a>
              </div>
              <div class="icones">
                <a href=""><i class="fab fa-youtube cor-tamanho-icone"></i></a>
              </div>
              <div class="icones">
                <a href=""><i class="fab fa-twitter cor-tamanho-icone"></i></a>
              </div>
              <div class="icones">
                <a href=""><i class="fab fa-pinterest-p cor-tamanho-icone"></i></a>
              </div>
            </div>
          </div>
        </section>

        <section class="direitos-autorais">
          <div class="direitos-autorais-estilo">
            <h3>&copy;2025 <span class="destaque-texto">Loyalty</span>. Todos os direitos reservados.</h3>
          </div>
        </section>
      </footer>
    `;
  }
}
