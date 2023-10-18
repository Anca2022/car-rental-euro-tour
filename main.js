let menuBtn = document.getElementsByClassName('mobile-menu')[0];
let exitMenuBtn = document.getElementsByClassName('close-menu')[0];
let navigation = document.getElementsByClassName('navbar')[0];
menuBtn.addEventListener('click', ()=> {
    navigation.classList.add('display-menu');
    exitMenuBtn.classList.add('display-exit-btn');
})
exitMenuBtn.addEventListener("click", ()=>{
    navigation.classList.remove('display-menu');
    exitMenuBtn.classList.remove('display-exit-btn')
})
// + sa iasa din meniu la ESC