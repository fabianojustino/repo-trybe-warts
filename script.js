const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const password = document.getElementById('password');

function checkin() {
    if(email.value === 'tryber@teste.com' && password.value === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
}

btnLogin.addEventListener('click', checkin)



