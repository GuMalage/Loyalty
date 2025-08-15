export class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav id="navbar-rool">
          <div class="pre-nav">
            <div class="logo">
              <a href="index.html"><img src="img/imgLogo/logo-fundo.png" alt="Logo Loyalty"></a>
            </div>
            <div class="barra-de-pesquisa">
              <input type="text" placeholder="O que você está buscando?" />
              <button><i class="fas fa-search"></i></button>
            </div>
            <div class="icones-nav">

              <div class="icones-pre-nav">
                <a href="#" class="efeito-icone">
                  <i class="fas fa-heart cor-icone"></i>
                </a>
                <small class="link-texto"><a href="#">Favoritos</a></small>
              </div>

              <div class="icones-pre-nav">
                <a href="carrinho.html" class="efeito-icone">
                  <i class="fas fa-shopping-cart cor-icone"></i>
                </a>
                <small  class="link-texto"><a href="carrinho.html">Carrinho</a></small>
              </div>

               <div class="icones-pre-nav">
                <a href="formLogin.html" class="efeito-icone">
                  <i class="fas fa-user cor-icone"></i>
                </a>
                <small class="link-texto"><a href="formLogin.html">Login</a></small>
              </div>

            </div>
          </div>
          <div class="navbar-navbar-cor">
            <div class="navbar-navbar">
              <div class="navbar-div-menu">
                <ul>
                  <li><a href="index.html">Início</a></li>
                  <li class="submenu">
                    <a href="#produtosContainer" class="submenu-toggle">Categorias</a>
                    <ul class="submenu-items">
                      <li><a href="#link">Estética</a></li>
                      <li><a href="#link">Profissões</a></li>
                      <li><a href="#link">Kids</a></li>
                      <li><a href="#link">Versículos</a></li>
                      <li><a href="#link">Contemporaneo</a></li>
                      <li><a href="#link">Geométrico</a></li>
                      <li><a href="#link">Arcos</a></li>
                      <li><a href="#link">Paisagem</a></li>
                      <li><a href="#link">Mosaico</a></li>
                    </ul>
                   </li>
                  <li><a href="#link">Adesivos</a></li>
                  <li><a href="#link">Quadros</a></li>
                  <li><a href="#link">Papel De Parede</a></li>
                  <li><a href="#">Contato</a></li>
                  <li><a href="#">Trocas e Devoluções</a></li>
                </ul>
              </div>
              <div class="navbar-div-contato-lingua">
                <span class="navbar-div-contato-lingua-hover">
                  <i class="fas fa-phone telefone"></i>
                  <span class="phone-text">46 99900-7950</span>
                </span>
              </div>
            </div>
          </div>
          <div class="div-toggle">
            <button class="menu-toggle" aria-label="Abrir menu">
               <i class="fas fa-bars"></i>
            </button>
          </div>
        </nav>
      </header>
    `;
  }
}

