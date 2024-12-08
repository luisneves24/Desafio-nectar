


const form = document.getElementById('leadForm');


const nome = document.getElementById('nome');

const email = document.getElementById('email');
const telefone = document.getElementById('telefone');

const mensagem = document.getElementById('mensagem');
const submitButton = document.getElementById('ubmitButton');
 


const nomeError = document.getElementById('nomeError');
const emailError = document.getElementById('emailError');
const telefoneError = document.getElementById('telefoneError');

let isValid = false;

validarEmailRegex = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


validarTelefoneRegex = (telefone) => {
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    return regex.test(telefone);
}



validarNome = () => {
    if(nome.value == undefined || nome.value == "") {
        nomeError.innerText = "Digite um nome";
        alert("Campo nome Obrigatório")
        return false;
    } else {
        nomeError.innerText = "";
        return true;
    }
}

validarEmail = () => {
    if(email.value == undefined) {
        emailError.innerText = "Digite um email";
        alert("Campo Email Obrigatório")
        return false;
    } else if(!validarEmailRegex(email.value)) {
        emailError.innerText = "Digite um email válido";
        alert("Campo Email Inválido")
        return false;
    } else {
        emailError.innerText = "";
        return true;
    }
}

validarTelefone = () => { 
    if(telefone.value == undefined || telefone.value == "" ) {
        telefoneError.innerText = "";
        return true;
    } else if(telefone.value != undefined && !validarTelefoneRegex(telefone.value)) {
        telefoneError.innerText = "Digite um telefone válido";
        alert("Campo Telefone Inválido")
        return false;
    } else {
        telefoneError.innerText = "";
        return true;
    }
        
}

telefone.addEventListener('input', (event) => {
    let tel = event.target.value;

    
    tel = tel.replace(/\D/g, "");

   
    if (tel.length <= 1) {
        tel = `${tel}`;
    } else if (tel.length <= 2) {
        tel = `(${tel}`;
    } else if (tel.length <= 7) {
        tel = `(${tel.slice(0, 2)}) ${tel.slice(2)}`;
    } else if (telefone.length <= 11) {
        tel = `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7)}`;
    } else {
        tel = `(${tel.slice(0, 2)}) ${tel.slice(2, 7)}-${tel.slice(7, 11)}`;
    }

   
    event.target.value = tel;
});



form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    console.log("testando submit");

      
    const isValidEmail = validarEmail();
    if(validarEmail()) {
        console.log("formulario é valido - EMAIL")
    } else {
        console.log("formulario é invalido - EMAIL")
    }


    const isValidTelefone = validarTelefone();
    if(validarTelefone()) {
        console.log("formulario é valido - telefone")
    } else {
        console.log("formulario é invalido - telefone")
    }


    const lead = {
        "nome": nome.value,
        "email": email.value,
        "telefone": telefone.value || "",
        "mensagem": mensagem.value || ""
    }

    if(isValidEmail && isValidTelefone) {
        unixTime = Math.floor(Date.now() / 1000);

        localStorage.setItem(unixTime, JSON.stringify(lead));
        alert("Cadastro efetuado com sucesso!")
    }
 })
 