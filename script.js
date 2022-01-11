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


const avaluation = document.getElementById('avaluation');

function fillRate () {
    for (let i = 1; i < 11; i+=1) {
        const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.name = 'rate';
        radio.value = i;
        radio.id = i;

        const label = document.createElement('label');

        label.htmlFor = i;

        const description = document.createTextNode(i);
        

        label.appendChild(description);
        label.appendChild(radio);

        avaluation.appendChild(label);
        
        
    }
}

fillRate();