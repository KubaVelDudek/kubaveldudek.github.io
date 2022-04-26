const przycisk = document.querySelector("#przyciskRozwin");
const boczny = document.querySelector("#boczny");
const strzalka = document.querySelector("#przyciskRozwin>img");
const instrukcja = document.querySelector("#instrukcjaBoczny");

przycisk.addEventListener('click', ()=>{
    boczny.classList.toggle('active');
    strzalka.classList.toggle('reverse');
    instrukcja.style.display = "none";
})

function PowiekszStrzalke() {
    strzalka.style.width = "38px";
}

function ZmniejszStrzalke() {
    strzalka.style.width = "20px";
}