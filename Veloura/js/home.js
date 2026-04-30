const carrinho = document.getElementById('carrinho');
const menu = document.getElementById('menu');


function verCarrinho() {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
