const bemvindo = document.querySelector(".clique");
const body = document.querySelector("body")

bemvindo.addEventListener("click", function() {
    body.classList.add("active");
});

const regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const email = document.getElementById("email");
const submit = document.querySelector(".butao");
const nome = document.getElementById("nome")
const telefone = document.getElementById("telefone")
const erroText = document.querySelector(".erro-text")

function validacao(input) {
    const formInput = input.parentElement;
    if (input.value === "" || input.value === undefined) {
        formInput.classList.add("erro");
        body.classList.add("erro");
        return true;
    } else if (!input.value.match(regexEmail)) {
        formInput.classList.add("erro");
        body.classList.add("erro");
        return true;
    } 
    else {
        formInput.classList.remove("erro");
        body.classList.remove("erro");
        return false; 
    }
}
function validacaoNome(input){
    if(input.value === "" || input.value === undefined){
        body.classList.add("erro");
        return true;
    }
    else{
        body.classList.remove("erro");
        return false; 
    }
}

submit.addEventListener('click', (event) => {
    if (validacao(email)) {
        erroText.innerHTML = "Email invalido, coloque corretamente"
        event.preventDefault(); 
    }
    else if(validacaoNome(nome)){
        erroText.innerHTML = "Voce esqueceu o nome, coloque corretamente"
        event.preventDefault();
    }
    else if(validacaoNome(telefone)){
        erroText.innerHTML = "Voce esqueceu o telefone, coloque corretamente"
        event.preventDefault();
    }
});
nome.oninput = () =>  body.classList.remove("erro")
email.oninput = () =>  body.classList.remove("erro")
telefone.oninput = () =>  body.classList.remove("erro")


const menuBurguer = document.querySelector(".burguer");

menuBurguer.addEventListener("click", function() {
   
    document.querySelector(".text").classList.toggle("active");
});
const dereco = document.querySelector(".x");
dereco.addEventListener("click", function() {
    document.querySelector("html").classList.add("endereco");
});

const closeDeco = document.querySelector(".close");

closeDeco.addEventListener("click", function() {
    document.querySelector("html").classList.remove("endereco");
});
const conta = document.querySelector(".y");
conta.addEventListener("click", function() {
    document.querySelector("html").classList.add("contato");
});

const closeConta = document.querySelector(".closee");

closeConta.addEventListener("click", function() {
    document.querySelector("html").classList.remove("contato");
});

const info = document.querySelector(".z");
info.addEventListener("click", function(){
    document.querySelector("html").classList.add("info");
});

const closeInfo = document.querySelector(".closedee");
closeInfo.addEventListener("click", function(){
    document.querySelector("html").classList.remove("info");
})