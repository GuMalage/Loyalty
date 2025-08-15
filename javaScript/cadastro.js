const senhaCadastro = document.getElementById('cadastroSenha');
const toggleCadastro = document.getElementById('toggleCadastroSenha');
const formCadastro = document.querySelector('form');

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

function validateNome() {
    const nome = document.getElementById('nome');
    if (nome.value.trim() === '') {
        showError(nome, 'Este campo é obrigatório.');
        return false;
    } else {
        showSuccess(nome);
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('cadastroEmail');
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

function validateTelefone() {
    const telefone = document.getElementById('telefone');
    if (telefone.value.trim() === '') {
        showSuccess(telefone);
        return true;
    } else {
        const telefoneRegex = /^[0-9\s\-\(\)]+$/;
        if (!telefoneRegex.test(telefone.value.trim())) {
            showError(telefone, 'Telefone em formato inválido. Formato: (46)99999 9999');
            return false;
        } else {
            showSuccess(telefone);
            return true;
        }
    }
}

function validateSenha() {
    const senha = document.getElementById('cadastroSenha');
    if (senha.value.trim() === '') {
        showError(senha, 'Este campo é obrigatório.');
        return false;
    } else {
        showSuccess(senha);
        return true;
    }
}

function validateCaptcha() {
    const captcha = document.getElementById('captcha');
    const captchaError = document.querySelector('.captcha-error');
    if (!captcha.checked) {
        captchaError.innerText = 'Por favor, confirme que você não é um robô.';
        return false;
    } else {
        captchaError.innerText = '';
        return true;
    }
}

if (toggleCadastro && senhaCadastro) {
    toggleCadastro.addEventListener('click', () => {
        const isPassword = senhaCadastro.type === 'password';
        senhaCadastro.type = isPassword ? 'text' : 'password';
        toggleCadastro.classList.toggle('fa-eye');
        toggleCadastro.classList.toggle('fa-eye-slash');
    });
}

if (formCadastro) {
    window.addEventListener('load', () => {
        const savedNome = localStorage.getItem('cadastroNome');
        const savedEmail = localStorage.getItem('cadastroEmail');
        const savedSenha = localStorage.getItem('cadastroSenha');
        if (savedNome) document.getElementById('nome').value = savedNome;
        if (savedEmail) document.getElementById('cadastroEmail').value = savedEmail;
        if (savedSenha) senhaCadastro.value = savedSenha;
    });

    document.getElementById('nome').addEventListener('input', validateNome);
    document.getElementById('cadastroEmail').addEventListener('input', validateEmail);
    document.getElementById('telefone').addEventListener('input', validateTelefone);
    document.getElementById('cadastroSenha').addEventListener('input', validateSenha);
    document.getElementById('captcha').addEventListener('change', validateCaptcha);

    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNomeValid = validateNome();
        const isEmailValid = validateEmail();
        const isTelefoneValid = validateTelefone();
        const isSenhaValid = validateSenha();
        const isCaptchaValid = validateCaptcha();

        if (isNomeValid && isEmailValid && isTelefoneValid && isSenhaValid && isCaptchaValid) {
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('cadastroEmail').value.trim();
            const senha = senhaCadastro.value.trim();

            localStorage.setItem('cadastroNome', nome);
            localStorage.setItem('cadastroEmail', email);
            localStorage.setItem('cadastroSenha', senha);

            alert('Inscrição realizada com sucesso');
            formCadastro.submit();
        }
    });
}