const przycisk = document.querySelector("#przyciskRozwin");
const boczny = document.querySelector("#boczny");
const strzalka = document.querySelector("#przyciskRozwin>img");

przycisk.addEventListener('click', ()=>{
    boczny.classList.toggle('active');
    strzalka.classList.toogle('reverse');
})

function PowiekszStrzalke() {
    strzalka.style.width = "38px";
}

function ZmniejszStrzalke() {
    strzalka.style.width = "20px";
}