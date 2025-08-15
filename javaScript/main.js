import { HeaderComponent } from "./componentes/header.js";
import { FooterComponent } from "./componentes/footer.js";
import { renderizarProdutos } from "./renderizarProduto.js";
import { renderizarCarrinho } from "./carrinho.js";
import { renderizarPaginaProdutos } from "./renderizarPaginaProduto.js";

customElements.define('header-component', HeaderComponent);

customElements.define('footer-component', FooterComponent);

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await renderizarProdutos();
    } catch (error) {
        console.log('Erro ao carregar produtos:', error);
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await renderizarPaginaProdutos();
    } catch (error) {
        console.log('Erro ao carregar produtos:', error);
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await renderizarCarrinho();
    } catch (error) {
        console.log('Erro ao carregar produtos:', error);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.navbar-div-menu');
    const submenus = document.querySelectorAll('.submenu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    submenus.forEach(submenu => {
        const toggle = submenu.querySelector('.submenu-toggle');

        toggle.addEventListener('click', function (e) {
            if (window.innerWidth < 768) {
                e.preventDefault();

                submenus.forEach(otherSubmenu => {
                    if (otherSubmenu !== submenu) {
                        otherSubmenu.classList.remove('active');
                    }
                });

                submenu.classList.toggle('active');
            }
        });
    });
});

