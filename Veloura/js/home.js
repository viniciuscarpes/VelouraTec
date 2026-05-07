const menu = document.getElementById('menu');
const texto = document.getElementById('text');


function verCarrinho() {
    if (menu.style.width === "0px") {
        menu.style.width = "240px";
    } else {
        menu.style.width = "0";
    }
}