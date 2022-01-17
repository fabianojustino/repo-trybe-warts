const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const password = document.getElementById('password');

const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');



function checkin() {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', checkin);

const avaluation = document.getElementById('avaluation');

function fillRate() {
  for (let i = 1; i < 11; i += 1) {
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

const submitButton = document.getElementById('submit-btn');
const inputAgree = document.getElementById('agreement');

function enableButton(event) {
  const element = event.target;
  if (element.checked) {
    submitButton.removeAttribute('disabled');
    submitButton.style.color = 'white'
  } else {
    submitButton.setAttribute('disabled', 'disabled');
    submitButton.style.color = 'gray';
  }
}

inputAgree.addEventListener('change', enableButton);

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const qtde = 500;

const showCharactersInserted = () => {
  const countCaracters = textarea.value.length;
  const total = qtde - countCaracters;
  counter.innerText = total; 
};

textarea.addEventListener('keyup', showCharactersInserted);


const cancelEventDefault=(event)=>{
  event.preventDefault();

  const pNomeSobrenome = document.getElementById('p-nomeCompleto');
  pNomeSobrenome.innerText = `Nome: ${inputName.value} ${inputLastName.value}`;

  const pEmail = document.getElementById('p-email');
  pEmail.innerText =`Email: ${inputEmail.value}`;

  const radioFamily =  document.querySelector('input[name="family"]:checked');
  const pEscola = document.getElementById('p-familia');
  pEscola.innerText = `Familia: ${radioFamily.value}`;
 

    




}

submitButton.addEventListener('click', cancelEventDefault);