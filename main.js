//Mobile menu
// + TO DO: sa iasa din meniu la ESC
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


//language menu
let languageBtn = document.getElementsByClassName('language')[0];
let languageMenu = document.getElementsByClassName('other-language')[0];
languageBtn.addEventListener('mouseover', ()=> {
languageMenu.classList.add('display-languages');
})
languageBtn.addEventListener('mouseout', ()=> {
    languageMenu.classList.remove('display-languages');
    })
languageBtn.addEventListener('click', ()=> {
    languageMenu.classList.remove('display-languages');
    })