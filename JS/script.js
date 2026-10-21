const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const confirmarSenha = document.getElementById("confirmarSenha");
 
const form = document.getElementById("form");
const modal = document.getElementById("modal");
const name = document.getElementById("name");

function SignUp() {
    const inputUsuario = usuario.value;
    const inputSenha = senha.value;
    const inputConfirmacao = confirmarSenha.value;

    if(inputUsuario.trim() === "" || inputSenha === "") {
        alert("Preencha o campo!");
        usuario.focus();
        return;
    }

    if (inputSenha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres!");
        senha.focus();
        return;
    }

    if(inputConfirmacao !== inputSenha) {
        alert("Senhas diferentes. Confira a confirmação.");
        confirmarSenha.focus();
        return;
    }

    localStorage.setItem("nome", inputUsuario);

    usuario.value = "";
    senha.value = "";
    confirmarSenha.value = "";

    mostrarModal();
}

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

document.getElementById("botaoLogin").addEventListener("click", () => {
    if (usuarioLogin.value.trim() === "" || senhaLogin.value === "") {
        alert("Preencha o usuário e a senha.");
        return;
    }

    alert("Formulário preenchido!");
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

// Opção para mostrar ou ocultar a senha
const mostrarSenha = document.getElementById("mostrarSenha");
mostrarSenha.addEventListener("click", () => {
    if(mostrarSenha.checked === true) {
        senha.type="text";
        confirmarSenha.type="text";
    } else if(mostrarSenha.checked === false) {
        senha.type="password";
        confirmarSenha.type="password";
    }
});

const senhaVisivel = document.getElementById("senhaVisivel");
senhaVisivel.addEventListener("click", () => {
    if(senhaVisivel.checked === true) {
        senhaLogin.type="text";
    } else if(senhaVisivel.checked === false) {
        senhaLogin.type="password";
    }
});