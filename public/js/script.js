const pole1 = document.getElementById("pole1")
const pole2 = document.getElementById("pole2")
const pole3 = document.getElementById("pole3")
const pole4 = document.getElementById("pole4")
const pole5 = document.getElementById("pole5")
const pole6 = document.getElementById("pole6")
const pole7 = document.getElementById("pole7")
const pole8 = document.getElementById("pole8")
const pole9 = document.getElementById("pole9")

const przycisk1 = document.getElementById("przycisk1")
const przycisk2 = document.getElementById("przycisk2")
const przycisk3 = document.getElementById("przycisk3")
const przycisk4 = document.getElementById("przycisk4")
const przycisk5 = document.getElementById("przycisk5")
const przycisk6 = document.getElementById("przycisk6")
const przycisk7 = document.getElementById("przycisk7")
const przycisk8 = document.getElementById("przycisk8")
const przycisk9 = document.getElementById("przycisk9")

const WyborGraczaKolko = document.getElementById("GraczKolko")
const WyborGraczaKrzyzyk = document.getElementById("GraczKrzyzyk")

let plansza;
let gracz;

function reset(){
    WyborGraczaKrzyzyk.disabled=false;
    WyborGraczaKolko.disabled=false;
    gracz = "";
    WlaczPlansze(0);
}

//SEKCJA ODPOWIEDZIALNA ZA WYŁĄCZENIE PLANSZY

WidokPlansza(); //wywołuje funkcje ktora ustala czy gracz został wybrany
function WidokPlansza(){
    if(gracz == ""){
        WlaczPlansze(1); //ustawia wartosc funkcji WlaczPlansze
    } else {
        WlaczPlansze(0);
    }
    
}
function WlaczPlansze(plansza){ // funkcja WlaczPlansze posiadajaca wartosc z poprzedniej funkcji stwierdza czy plansza ma byc wlaczona czy nie,
    if(plansza == 0){ // jesli gracz nie został wybrany to plansza jest zablokowana
        przycisk1.disabled = true;
        przycisk2.disabled = true;
        przycisk3.disabled = true;
        przycisk4.disabled = true;
        przycisk5.disabled = true;
        przycisk6.disabled = true;
        przycisk7.disabled = true;
        przycisk8.disabled = true;
        przycisk9.disabled = true;
    }else{ // jesli gracz został wybrany to plansza jest odblokowana
        przycisk1.disabled = false;
        przycisk2.disabled = false;
        przycisk3.disabled = false;
        przycisk4.disabled = false;
        przycisk5.disabled = false;
        przycisk6.disabled = false;
        przycisk7.disabled = false;
        przycisk8.disabled = false;
        przycisk9.disabled = false;
    }
}
//SEKCJA ODPOWIEDZIALNA ZA WYBÓR GRACZA 

function WyborKolko(){ // pozwala wybrac pierwszego gracza jako kolko
    gracz="kolko";
    WyborGraczaKolko.disabled=true;
    WyborGraczaKrzyzyk.disabled=true;
    Test(gracz);
    WlaczPlansze(plansza);
}
function WyborKrzyzyk(){ // pozwala wybrac pierwszego gracza jako krzyzyk
    gracz="krzyzyk";
    WyborGraczaKrzyzyk.disabled=true;
    WyborGraczaKolko.disabled=true;
    Test(gracz);
    WlaczPlansze(plansza);
}
function Test(gracz){
    alert(gracz);
}


//SEKCJA ODPOWIEDZIALNA ZA PRZEBIEG GRY
let PolaKolka; 
let PolaKrzyzyka;