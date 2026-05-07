const senhaDigitada = document.getElementById('sennhaDigitada');
const nomeDeUsuario = document.getElementById('nomeDeUsuario');
let senhaCorreta = "1234";

function validarLogin() {
    if (senhaDigitada.value === senhaCorreta) {
        window.location.href = "http://127.0.0.1:5500/home.html"
    } else {
        senhaDigitada.style.border = "1.5px solid red"
    } if (senhaDigitada.value.trim() === "") {
        senhaDigitada.placeholder = "Campo obrigatório!";
    } if (nomeDeUsuario.value.trim() === "") {
        nomeDeUsuario.placeholder = "Campo obrigatório!";
    }
}