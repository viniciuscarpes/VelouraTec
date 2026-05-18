const menu = document.getElementById('menu');
const texto = document.getElementById('text');


function verMenu() {
    if (menu.style.width === "0px") {
        menu.style.width = "240px";
    } else {
        menu.style.width = "0";
    }
}



const body = document.body;
const produto = document.querySelectorAll(".produto");
const btn1 = document.querySelector(".btn-mode1");
const btn2 = document.querySelector(".btn-mode2");
const cabecalho = document.querySelector(".cabecalho");
const imgBtn = document.querySelector(".img-btn");
const menulateral = document.querySelector(".menu-lateral");
const banner = document.querySelector(".img-banner");
const text = document.querySelector(".textnosso");
const contato = document.querySelector(".container2");
const footer = document.querySelector(".foo");



btn2.addEventListener("click", function () {
    body.style.backgroundColor = "black";
    produto.forEach((card) => {
        card.style.backgroundColor = "#27004b";
    });
    cabecalho.style.backgroundColor = ("#27004b")
    imgBtn.style.backgroundColor = ("#27004b")
    menulateral.style.backgroundColor = "rgba(35, 0, 60, 0.85)"
    banner.src = "imgs/baner.png";
    text.style.color = "azure"
    contato.style.backgroundColor = "#27004b"
    footer.style.backgroundColor = "#27004b"
});


btn1.addEventListener("click", function () {
    body.style.backgroundColor = "#F7F5FF";
    produto.forEach((card) => {
        card.style.backgroundColor = "#9066FF";
    });
    cabecalho.style.backgroundColor = "#4B2FA3"
    imgBtn.style.backgroundColor = "#4B2FA3"
    menulateral.style.backgroundColor = "rgba(75, 47, 163, 0.85)"
    banner.src = "imgs/baner2.png";
    text.style.color = "#1F1F1F"
    contato.style.backgroundColor = "#9066FF"
    footer.style.backgroundColor = "#4B2FA3"
});