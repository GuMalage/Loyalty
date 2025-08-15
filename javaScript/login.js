const senhaLogin = document.getElementById('loginSenha');
const toggleLogin = document.getElementById('toggleLoginSenha');
const formLogin = document.querySelector('form');

function showError(input, message) {
    const inputWrapper = input.parentElement;
    const errorMessage = inputWrapper.querySelector('.error-message');

    errorMessage.innerText = message;
    input.classList.add('input-error');
    input.classList.remove('input-success');
}

function showSuccess(input) {
    const inputWrapper = input.parentElement;
    const errorMessage = inputWrapper.querySelector('.error-message');

    errorMessage.innerText = '';
    input.classList.remove('input-error');
    input.classList.add('input-success');
}

function validateEmail() {
    const email = document.getElementById('loginEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        showError(email, 'Este campo é obrigatório.');
        return false;
    } else if (!emailRegex.test(email.value.trim())) {
        showError(email, 'E-mail em formato inválido. Formato: nome@email.com');
        return false;
    } else {
        showSuccess(email);
        return true;
    }
}

function validateSenha() {
    const senha = document.getElementById('loginSenha');
    if (senha.value.trim() === '') {
        showError(senha, 'Este campo é obrigatório.');
        return false;
    } else {
        showSuccess(senha);
        return true;
    }
}

if (toggleLogin && senhaLogin) {
    toggleLogin.addEventListener('click', () => {
        const isPassword = senhaLogin.type === 'password';
        senhaLogin.type = isPassword ? 'text' : 'password';
        toggleLogin.classList.toggle('fa-eye');
        toggleLogin.classList.toggle('fa-eye-slash');
    });
}

if (formLogin) {
    window.addEventListener('load', () => {
        const savedEmail = localStorage.getItem('loginEmail');
        const savedSenha = localStorage.getItem('loginSenha');
        if (savedEmail) document.getElementById('loginEmail').value = savedEmail;
        if (savedSenha) senhaLogin.value = savedSenha;
    });

    // Validação em tempo real
    document.getElementById('loginEmail').addEventListener('input', validateEmail);
    document.getElementById('loginSenha').addEventListener('input', validateSenha);

    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail();
        const isSenhaValid = validateSenha();

        if (isEmailValid && isSenhaValid) {
            const email = document.getElementById('loginEmail').value.trim();
            const senha = senhaLogin.value.trim();

            localStorage.setItem('loginEmail', email);
            localStorage.setItem('loginSenha', senha);

            alert('Bem-vindo');
            formLogin.submit();
        }
    });
}