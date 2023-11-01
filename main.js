// + TO DO: sa iasa din meniu la ESC
//mobile menu
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


////// Reservation page 
const cars = [
    {type: 'opel-corsa-1-4-i', title: 'Opel Corsa 1.4i', img: 'img/opel-corsa-1-4-i-265.jpg', price1: 26, price2: 24, price3: 20, price4: 18, warranty: 200, assurance: 40},
    {type: 'chevrolet-spark-0-8-i' , title: 'Chevrolet Spark 0.8i', img: 'img/chevrolet-spark-0-8-i.jpg', price1: 36, price2: 34, price3: 30, price4: 28, warranty: 250, assurance: 50},
    {type: 'vw-passat-2-0-tdi' , title: 'VW Passat 2.0 TDI', img: 'img/vw-passat-2017-648.jpg', price1: 55, price2: 50, price3: 48, price4: 44, warranty: 300, assurance: 60}
];
let n = 0;     // nth car in the cars array
let noDays=document.getElementById('no-days'); // number of days selected 
let priceDay=document.getElementById('price-per-day');
let tripPrice=document.getElementById('trip-price');
let warranty = document.getElementById('warranty');
let assurance = document.getElementById('assurance');
let finalPrice = document.getElementById('final-price'); 
let checkAssurance=document.getElementById('assurance-check');
function updateTotal (){
    finalPrice.innerText = Number(tripPrice.innerText.slice(0,-1))+15 + '€';
    if(checkAssurance.checked) {
        finalPrice.innerText = Number(assurance.innerText.slice(0,-1))+Number(finalPrice.innerText.slice(0,-1)) + '€';
    }
}

function priceUpdate() {
    if(noDays.innerText<=3) {
        priceDay.innerText=cars[n].price1; 
        tripPrice.innerText=noDays.innerText*cars[n].price1 + '€';
        }
    else if (noDays.innerText <= 7) {
        priceDay.innerText=cars[n].price2;
        tripPrice.innerText=noDays.innerText*cars[n].price2 + '€';
    }
    else if (noDays.innerText <= 21) {
        priceDay.innerText=cars[n].price3 + '€';
        tripPrice.innerText=noDays.innerText*cars[n].price3;
    }
    else {
        priceDay.innerText=cars[n].price4 + '€';
        tripPrice.innerText=noDays.innerText*cars[n].price4;
    }
    updateTotal();
};

function carSelect() {
    let chosenCar=document.getElementById('chosen-car').value;
        
    for (let i=0; i<cars.length; i++){
      if(cars[i].type == chosenCar) {
        n=i;}
    };
    //change img + warranty + assurance
    let carImg = document.getElementsByClassName('reservation-img')[0].children[0];
    carImg.src=cars[n].img;
    warranty.innerText = cars[n].warranty + '€'; 
    assurance.innerText = cars[n].assurance + '€';
    priceUpdate(); 
};

//reservation dates
const today = new Date();

function date(date, n){
    date.setDate(date.getDate() + n);
    let day = date.getDate();
    if (day<10){
        day='0'+day;
    }
    let month = date.getMonth() + 1;
    if (month<10){
        month='0'+month;
    }
    let year = date.getFullYear();
    return (`${year}-${month}-${day}`);
}

let pickUpDate = document.getElementById('pick-up');
pickUpDate.setAttribute('min', date(today,1));
let dropoffDate = document.getElementById('dropoff');
dropoffDate.setAttribute('min', date(today,1));
let first; 
let second;

function getFirst(){
    first=pickUpDate.value;
    first = new Date(first);
    dropoffDate.setAttribute('min', date(first,1));
    //update first
}

function getSecond(){
    second=dropoffDate.value;
    second=new Date(second);
    noDays.innerText=second.getDate()-first.getDate()+1;
    priceUpdate();
}

pickUpDate.addEventListener('input', getFirst);
dropoffDate.addEventListener('input', getSecond);




