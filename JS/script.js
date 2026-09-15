const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");

const form = document.getElementById("form");
const modal = document.getElementById("modal");
const name = document.getElementById("name");

function SignUp() {
    const inputUsuario = usuario.value;
    const inputSenha = senha.value;

    if(inputUsuario.trim() === "") {
        alert("Preencha o campo!");
        usuario.focus();
        return;
    }

    if (inputSenha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    senha.focus();
    return;
}

    const login = localStorage.setItem("nome", inputUsuario);

    usuario.value = "";
    senha.value = "";

    mostrarModal();
}

function mostrarModal() {
    const nameSalvo = localStorage.getItem("nome");

    name.innerText = nameSalvo;

    modal.style.display = "block";
    form.style.display = "none";
}

function fechar() {
    modal.style.display = "none";
    form.style.display = "block";

    localStorage.removeItem("nome");
}