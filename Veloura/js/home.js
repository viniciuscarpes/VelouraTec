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
const perfil = document.querySelector(".perfil")
const links = document.querySelectorAll(".lend")



btn2.addEventListener("click", function () {
    body.style.backgroundColor = "black";
    produto.forEach((card) => {
        card.style.backgroundColor = "#27004b";
    });
    cabecalho.style.backgroundColor = ("#27004b")
    imgBtn.style.backgroundColor = ("#27004b")
    menulateral.style.backgroundColor = "rgba(35, 0, 60, 0.85)"
    banner.src = "imgs/baner.png";
    contato.style.backgroundColor = "#27004b"
    footer.style.backgroundColor = "#27004b"
    perfil.style.backgroundColor = "#5835cd"
        links.forEach(link => {
        link.style.color = "#a94eff";
    });
});


btn1.addEventListener("click", function () {
    body.style.backgroundColor = "#866EB8";
    produto.forEach((card) => {
        card.style.backgroundColor = "#4B2FA3";
    });
    cabecalho.style.backgroundColor = "#4B2FA3"
    imgBtn.style.backgroundColor = "#4B2FA3"
    menulateral.style.backgroundColor = "rgba(75, 47, 163, 0.85)"
    banner.src = "imgs/baner3.png";
    contato.style.backgroundColor = "#4B2FA3"
    footer.style.backgroundColor = "#4B2FA3"
    links.forEach(link => {
        link.style.color = "#250047";
    });
});