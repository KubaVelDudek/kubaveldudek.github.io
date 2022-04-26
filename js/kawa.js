const przycisk = document.querySelector("#przyciskRozwin");
const boczny = document.querySelector("#boczny");

przycisk.addEventListener('click', ()=>{
    boczny.classList.toggle('active');
})