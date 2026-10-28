const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
const mensage = document.getElementById("mensage");
 
const form = document.getElementById("form");
const modal = document.getElementById("modal");
const name = document.getElementById("name");

function limparMensagem() {
    mensage.textContent = "";
    alerts.textContent = "";
}

usuario.addEventListener("input", limparMensagem);
senha.addEventListener("input", limparMensagem);
confirmarSenha.addEventListener("input", limparMensagem);

function SignUp() {
    const inputUsuario = usuario.value;
    const inputSenha = senha.value;
    const inputConfirmacao = confirmarSenha.value;
    
    if(inputConfirmacao !== inputSenha) {
        mensage.textContent = "Senhas diferentes. Confira a confirmação.";
        confirmarSenha.focus();
        return;
    }

    localStorage.setItem("nome", inputUsuario);

    usuario.value = "";
    senha.value = "";
    confirmarSenha.value = "";

    mostrarModal();
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    SignUp();
});

// Para acessar outro formulário
const formLogin = document.getElementById("formLogin");

document.getElementById("linkAcessar").addEventListener("click", (evento) => {
    evento.preventDefault();

    form.classList.add("escondido");
    formLogin.classList.remove("escondido");
});

document.getElementById("linkCadastrar").addEventListener("click", (evento) => {
    evento.preventDefault();

    formLogin.classList.add("escondido");
    form.classList.remove("escondido");
});

const usuarioLogin = document.getElementById("usuarioLogin");
const senhaLogin = document.getElementById("senhaLogin");
const alerts = document.getElementById("alerts");

usuarioLogin.addEventListener("input", limparMensagem);
senhaLogin.addEventListener("input", limparMensagem);

function validarLogin() {
    alerts.textContent = "Formulário preenchido!";
}

formLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();
    validarLogin();
});

// Opção para mostrar ou ocultar a senha
const mostrarSenha = document.getElementById("mostrarSenha");
mostrarSenha.addEventListener("change", () => {
    if(mostrarSenha.checked === true) {
        senha.type="text";
        confirmarSenha.type="text";
    } else if(mostrarSenha.checked === false) {
        senha.type="password";
        confirmarSenha.type="password";
    }
});

const senhaVisivel = document.getElementById("senhaVisivel");
senhaVisivel.addEventListener("change", () => {
    if(senhaVisivel.checked === true) {
        senhaLogin.type="text";
    } else if(senhaVisivel.checked === false) {
        senhaLogin.type="password";
    }
});

// Função para o Modal
const container = document.querySelector(".container");

function mostrarModal() {
    const nameSalvo = localStorage.getItem("nome");
    name.innerText = nameSalvo;

    modal.style.display = "block";
    container.style.display = "none";
}

function fechar() {
    modal.style.display = "none";
    container.style.display = "block";

    localStorage.removeItem("nome");
}