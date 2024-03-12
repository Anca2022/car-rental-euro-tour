//mobile menu
let menuBtn = document.getElementsByClassName('mobile-menu')[0];
let exitMenuBtn = document.getElementsByClassName('close-menu')[0];
let navigation = document.getElementsByClassName('navbar')[0];
menuBtn.addEventListener('click', openMenu)
exitMenuBtn.addEventListener('click', closeMenu)
document.addEventListener('keydown', closeMenu)
function openMenu(){
    navigation.classList.add('display-menu');
    exitMenuBtn.classList.add('display-exit-btn');
};

function closeMenu(e){
    if(e.key === 'Escape' || e.pointerType==='touch'){
        navigation.classList.remove('display-menu');
        exitMenuBtn.classList.remove('display-exit-btn');
    }
    
}


//language menu
// let languageBtn = document.getElementsByClassName('language')[0];
// let languageMenu = document.getElementsByClassName('other-language')[0];
// languageBtn.addEventListener('mouseover', ()=> {
// languageMenu.classList.add('display-languages');
// });
// languageBtn.addEventListener('mouseout', ()=> {
//     languageMenu.classList.remove('display-languages');
//     });
// languageBtn.addEventListener('click', ()=> {
//     if (languageMenu.classList.contains('display-languages')) {
//         languageMenu.classList.remove('display-languages');
//     }
//     else {
//         languageMenu.classList.add('display-languages');
//     }
// });

/// contract nav

const logo = document.querySelector(".logo"); 
const upperNav = document.querySelector(".upper-nav");
const header = document.querySelector("header");
const sectionOne = document.querySelector(".first"); 

const sectionOneObserver = new IntersectionObserver (function(entries, sectionOneObserver){
    entries.forEach( entry=>{
        if(!entry.isIntersecting) {
            logo.classList.add('contract-logo');
            upperNav.classList.add('contract-nav');
        }
        else {
            logo.classList.remove('contract-logo');
            upperNav.classList.remove('contract-nav');
        }
    });    
});

sectionOneObserver.observe(sectionOne);

