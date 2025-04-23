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
    WyborGraczaKrzyzyk.style.backgroundColor="rgb(12, 207, 12)";
    WyborGraczaKolko.disabled=false;
    WyborGraczaKolko.style.backgroundColor="rgb(12, 207, 12)";
    gracz = "";
    WlaczPlansze(0);
    PolaKolka=[];
    PolaKrzyzyka=[];
    KolorPlanszy(1);
}
function KolorPlanszy(kolor){
    if(kolor == 1){
        przycisk1.style.backgroundColor="red";
        przycisk2.style.backgroundColor="red";
        przycisk3.style.backgroundColor="red";
        przycisk4.style.backgroundColor="red";
        przycisk5.style.backgroundColor="red";
        przycisk6.style.backgroundColor="red";
        przycisk7.style.backgroundColor="red";
        przycisk8.style.backgroundColor="red";
        przycisk9.style.backgroundColor="red";
        przycisk1.style.backgroundImage="unset";
        przycisk2.style.backgroundImage="unset";
        przycisk3.style.backgroundImage="unset";
        przycisk4.style.backgroundImage="unset";
        przycisk5.style.backgroundImage="unset";
        przycisk6.style.backgroundImage="unset";
        przycisk7.style.backgroundImage="unset";
        przycisk8.style.backgroundImage="unset";
        przycisk9.style.backgroundImage="unset";
    }else{
        przycisk1.style.backgroundColor="rgb(12, 207, 12)";
        przycisk2.style.backgroundColor="rgb(12, 207, 12)";
        przycisk3.style.backgroundColor="rgb(12, 207, 12)";
        przycisk4.style.backgroundColor="rgb(12, 207, 12)";
        przycisk5.style.backgroundColor="rgb(12, 207, 12)";
        przycisk6.style.backgroundColor="rgb(12, 207, 12)";
        przycisk7.style.backgroundColor="rgb(12, 207, 12)";
        przycisk8.style.backgroundColor="rgb(12, 207, 12)";
        przycisk9.style.backgroundColor="rgb(12, 207, 12)";
        przycisk1.style.backgroundImage="unset";
        przycisk2.style.backgroundImage="unset";
        przycisk3.style.backgroundImage="unset";
        przycisk4.style.backgroundImage="unset";
        przycisk5.style.backgroundImage="unset";
        przycisk6.style.backgroundImage="unset";
        przycisk7.style.backgroundImage="unset";
        przycisk8.style.backgroundImage="unset";
        przycisk9.style.backgroundImage="unset";
    }
}
function obecnyGracz(typ){
    if(typ==1){
        WyborGraczaKolko.style.backgroundColor="rgb(12, 207, 12)";
        WyborGraczaKrzyzyk.style.backgroundColor="red";
    }else{
        WyborGraczaKolko.style.backgroundColor="red";
        WyborGraczaKrzyzyk.style.backgroundColor="rgb(12, 207, 12)";
    }
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

function WyborKolko(){ //
// wygrana(PolaKolka); pozwala wybrac pierwszego gracza jako kolko
    gracz="kolko";
    WyborGraczaKolko.disabled=true;
    WyborGraczaKrzyzyk.disabled=true;
    obecnyGracz(1);
    WlaczPlansze(plansza);
    KolorPlanszy(0);
    
}
function WyborKrzyzyk(){ // pozwala wybrac pierwszego gracza jako krzyzyk
    gracz="krzyzyk";
    WyborGraczaKolko.disabled=true;
    WyborGraczaKrzyzyk.disabled=true;
    obecnyGracz(0);
    WlaczPlansze(plansza);
    KolorPlanszy(0);
}
function Test(gracz){
    alert(gracz);
}

let PolaKolka =[];
let PolaKrzyzyka =[];
//SEKCJA ODPOWIEDZIALNA ZA PRZEBIEG GRY
function WykonajRuch1(){ //                                 PIERWSZY RUCH
    if(gracz=="kolko"){
        PolaKolka.push(-1);
        przycisk1.disabled=true;
        przycisk1.style.backgroundImage="url(kolko.jpg)";
        przycisk1.style.backgroundSize="110% 108%";
        przycisk1.style.backgroundPosition="center";
        obecnyGracz(0);
        wygrana(PolaKolka);
        gracz="krzyzyk";
    }else{
        PolaKrzyzyka.push(1);
        przycisk1.disabled=true;
        przycisk1.style.backgroundImage="url(krzyzyk.jpg)";
        przycisk1.style.backgroundSize="110% 108%";
        przycisk1.style.backgroundPosition="center";
        gracz="kolko";
        wygrana(PolaKolka);
        obecnyGracz(1);
    }
}
function WykonajRuch2(){ //                                 DRUGI RUCH
    if(gracz=="kolko"){
        PolaKolka.push(-2);
        przycisk2.disabled=true;
        przycisk2.style.backgroundImage="url(kolko.jpg)";
        przycisk2.style.backgroundSize="110% 108%";
        przycisk2.style.backgroundPosition="center";
        obecnyGracz(0);
        wygrana(PolaKolka);
        gracz="krzyzyk";
    }else{
        PolaKrzyzyka.push(2);
        przycisk2.disabled=true;
        przycisk2.style.backgroundImage="url(krzyzyk.jpg)";
        przycisk2.style.backgroundSize="110% 108%";
        przycisk2.style.backgroundPosition="center";
        obecnyGracz(1);
        wygrana(PolaKolka);
        gracz="kolko";
    }
}
function WykonajRuch3(){ //                                 TRZECI RUCH
    if(gracz=="kolko"){
        PolaKolka.push(-3);
        przycisk3.disabled=true;
        przycisk3.style.backgroundImage="url(kolko.jpg)";
        przycisk3.style.backgroundSize="110% 108%";
        przycisk3.style.backgroundPosition="center";
        obecnyGracz(0);
        wygrana(PolaKolka);
        gracz="krzyzyk";
    }else{
        PolaKrzyzyka.push(3);
        przycisk3.disabled=true;
        przycisk3.style.backgroundImage="url(krzyzyk.jpg)";
        przycisk3.style.backgroundSize="110% 108%";
        przycisk3.style.backgroundPosition="center";
        obecnyGracz(1);
        wygrana(PolaKolka);
        gracz="kolko";
    }
}
function WykonajRuch4(){ //                                 CZWARTY RUCH
    if(gracz=="kolko"){
        PolaKolka.push(-4);
        przycisk4.disabled=true;
        przycisk4.style.backgroundImage="url(kolko.jpg)";
        przycisk4.style.backgroundSize="110% 108%";
        przycisk4.style.backgroundPosition="center";
        obecnyGracz(0);
        wygrana(PolaKolka);
        gracz="krzyzyk";
    }else{
        PolaKrzyzyka.push(4);
        przycisk4.disabled=true;
        przycisk4.style.backgroundImage="url(krzyzyk.jpg)";
        przycisk4.style.backgroundSize="110% 108%";
        przycisk4.style.backgroundPosition="center";
        obecnyGracz(1);
        wygrana(PolaKolka);
        gracz="kolko";
    }
}
function WykonajRuch5(){ //                                 PIATY RUCH
    if(gracz=="kolko"){
        PolaKolka.push(-5);
        przycisk5.disabled=true;
        przycisk5.style.backgroundImage="url(kolko.jpg)";
        przycisk5.style.backgroundSize="110% 108%";
        przycisk5.style.backgroundPosition="center";
        obecnyGracz(0);
        wygrana(PolaKolka);
        gracz="krzyzyk";
    }else{
        PolaKrzyzyka.push(5);
        przycisk5.disabled=true;
        przycisk5.style.backgroundImage="url(krzyzyk.jpg)";
        przycisk5.style.backgroundSize="110% 108%";
        przycisk5.style.backgroundPosition="center";
        obecnyGracz(1);
        wygrana(PolaKolka);
        gracz="kolko";
    }
}
function WykonajRuch6(){ //                                 SZOSTY RUCH
    if(gracz=="kolko"){
        PolaKolka.push(-6);
        przycisk6.disabled=true;
        przycisk6.style.backgroundImage="url(kolko.jpg)";
        przycisk6.style.backgroundSize="110% 108%";
        przycisk6.style.backgroundPosition="center";
        obecnyGracz(0);
        wygrana(PolaKolka);
        gracz="krzyzyk";
    }else{
        PolaKrzyzyka.push(6);
        przycisk6.disabled=true;
        przycisk6.style.backgroundImage="url(krzyzyk.jpg)";
        przycisk6.style.backgroundSize="110% 108%";
        przycisk6.style.backgroundPosition="center";
        obecnyGracz(1);
        wygrana(PolaKolka);
        gracz="kolko";
    }
}
function WykonajRuch7(){ //                                 SIODMY RUCH
    if(gracz=="kolko"){
        PolaKolka.push(-7);
        przycisk7.disabled=true;
        przycisk7.style.backgroundImage="url(kolko.jpg)";
        przycisk7.style.backgroundSize="110% 108%";
        przycisk7.style.backgroundPosition="center";
        obecnyGracz(0);
        wygrana(PolaKolka);
        gracz="krzyzyk";
    }else{
        PolaKrzyzyka.push(7);
        przycisk7.disabled=true;
        przycisk7.style.backgroundImage="url(krzyzyk.jpg)";
        przycisk7.style.backgroundSize="110% 108%";
        przycisk7.style.backgroundPosition="center";
        obecnyGracz(1);
        wygrana(PolaKolka);
        gracz="kolko";
    }
}
function WykonajRuch8(){ //                                 OSMY RUCH
    if(gracz=="kolko"){
        PolaKolka.push(-8);
        przycisk8.disabled=true;
        przycisk8.style.backgroundImage="url(kolko.jpg)";
        przycisk8.style.backgroundSize="110% 108%";
        przycisk8.style.backgroundPosition="center";
        obecnyGracz(0);
        wygrana(PolaKolka);
        gracz="krzyzyk";
    }else{
        PolaKrzyzyka.push(8);
        przycisk8.disabled=true;
        przycisk8.style.backgroundImage="url(krzyzyk.jpg)";
        przycisk8.style.backgroundSize="110% 108%";
        przycisk8.style.backgroundPosition="center";
        obecnyGracz(1);
        wygrana(PolaKolka);
        gracz="kolko";
    }
}
function WykonajRuch9(){ //                                 DZIEWIATY RUCH
    if(gracz=="kolko"){
        PolaKolka.push(-9);
        przycisk9.disabled=true;
        przycisk9.style.backgroundImage="url(kolko.jpg)";
        przycisk9.style.backgroundSize="110% 108%";
        przycisk9.style.backgroundPosition="center";
        przycisk9.style.backgroundRepeat="no-repeat";
        obecnyGracz(0);
        wygrana(PolaKolka);
        gracz="krzyzyk";
    }else{
        PolaKrzyzyka.push(9);
        przycisk9.disabled=true;
        przycisk9.style.backgroundImage="url(krzyzyk.jpg)";
        przycisk9.style.backgroundSize="110% 108%";
        przycisk9.style.backgroundPosition="center";
        przycisk9.style.backgroundRepeat="no-repeat";
        obecnyGracz(1);
        wygrana(PolaKolka);
        gracz="kolko";
    }
}
function TestPolKolka(){
    alert(PolaKolka);
}
function TestPolKrzyzyka(){
    alert(PolaKrzyzyka);
}// SPRAWDZANIE WYGRANEJ
function wygrana(){
    if( (PolaKolka.includes(-1) && PolaKolka.includes(-2) && PolaKolka.includes(-3)) ||
        (PolaKolka.includes(-1) && PolaKolka.includes(-4) && PolaKolka.includes(-7)) ||
        (PolaKolka.includes(-1) && PolaKolka.includes(-5) && PolaKolka.includes(-9)) ||
        (PolaKolka.includes(-2) && PolaKolka.includes(-5) && PolaKolka.includes(-8)) ||
        (PolaKolka.includes(-3) && PolaKolka.includes(-6) && PolaKolka.includes(-9)) ||
        (PolaKolka.includes(-3) && PolaKolka.includes(-5) && PolaKolka.includes(-7)) ||
        (PolaKolka.includes(-4) && PolaKolka.includes(-5) && PolaKolka.includes(-6)) ||
        (PolaKolka.includes(-7) && PolaKolka.includes(-8) && PolaKolka.includes(-9))){     
            GoraPoziom();
            setTimeout(()=> {alert("Wygrana dla kółka");reset();},10000);
    }else{
    if( (PolaKrzyzyka.includes(1) && PolaKrzyzyka.includes(2) && PolaKrzyzyka.includes(3)) ||
        (PolaKrzyzyka.includes(1) && PolaKrzyzyka.includes(4) && PolaKrzyzyka.includes(7)) ||
        (PolaKrzyzyka.includes(1) && PolaKrzyzyka.includes(5) && PolaKrzyzyka.includes(9)) ||
        (PolaKrzyzyka.includes(2) && PolaKrzyzyka.includes(5) && PolaKrzyzyka.includes(8)) ||
        (PolaKrzyzyka.includes(3) && PolaKrzyzyka.includes(6) && PolaKrzyzyka.includes(9)) ||
        (PolaKrzyzyka.includes(3) && PolaKrzyzyka.includes(5) && PolaKrzyzyka.includes(7)) ||
        (PolaKrzyzyka.includes(4) && PolaKrzyzyka.includes(5) && PolaKrzyzyka.includes(6)) ||
        (PolaKrzyzyka.includes(7) && PolaKrzyzyka.includes(8) && PolaKrzyzyka.includes(9))){
            GoraPoziom();
            setTimeout(()=> {alert("Wygrana dla krzyżyka");reset();},10000 );   
        } 
        else{
            remis();
        }}
}
function remis(){
    if    (przycisk1.style.backgroundImage !=="unset" && przycisk2.style.backgroundImage !=="unset" && przycisk3.style.backgroundImage !=="unset"
        && przycisk4.style.backgroundImage !=="unset" && przycisk5.style.backgroundImage !=="unset" && przycisk6.style.backgroundImage !=="unset"
        && przycisk7.style.backgroundImage !=="unset" && przycisk8.style.backgroundImage !=="unset" && przycisk9.style.backgroundImage !=="unset")
        {
        setTimeout(()=> {alert("REMIS");reset();},1000 ); 
    }
}
function GoraPoziom(){
    if((PolaKrzyzyka.includes(1) && PolaKrzyzyka.includes(2) && PolaKrzyzyka.includes(3)) ||
        (PolaKolka.includes(-1) && PolaKolka.includes(-2) && PolaKolka.includes(-3))){
            document.getElementById("GoraPoziom").style.display="block";
        }else{
            LewoPion();
        }
}
function LewoPion(){
    if((PolaKrzyzyka.includes(1) && PolaKrzyzyka.includes(4) && PolaKrzyzyka.includes(7))||
    (PolaKolka.includes(-1) && PolaKolka.includes(-4) && PolaKolka.includes(-7))){
        document.getElementById("LewoPion").style.display="block";
    }else{
        LewySkos();
    }
}
function LewySkos(){
    if((PolaKrzyzyka.includes(1) && PolaKrzyzyka.includes(5) && PolaKrzyzyka.includes(9))||
    (PolaKolka.includes(-1) && PolaKolka.includes(-5) && PolaKolka.includes(-9))){
        document.getElementById("LewySkos").style.display="block";
    }else{
        SrodekPion();
    }
}
function SrodekPion(){
    if((PolaKrzyzyka.includes(2) && PolaKrzyzyka.includes(5) && PolaKrzyzyka.includes(8))||
    (PolaKolka.includes(-2) && PolaKolka.includes(-5) && PolaKolka.includes(-8)) ){
        document.getElementById("SrodekPion").style.display="block";
    }else{
        PrawoPion();
    }
}
function PrawoPion(){
    if((PolaKrzyzyka.includes(3) && PolaKrzyzyka.includes(6) && PolaKrzyzyka.includes(9)) ||
    (PolaKolka.includes(-3) && PolaKolka.includes(-6) && PolaKolka.includes(-9))){
        document.getElementById("PrawoPion").style.display="block";
    }else{
        PrawySkos();
    }
}
function PrawySkos(){
    if((PolaKrzyzyka.includes(3) && PolaKrzyzyka.includes(5) && PolaKrzyzyka.includes(7)) ||
    (PolaKolka.includes(-3) && PolaKolka.includes(-5) && PolaKolka.includes(-7))){
        document.getElementById("PrawySkos").style.display="block";
    }else{
        SrodekPoziom();
    }
}
function SrodekPoziom(){
    if((PolaKrzyzyka.includes(4) && PolaKrzyzyka.includes(5) && PolaKrzyzyka.includes(6)) ||
    (PolaKolka.includes(-4) && PolaKolka.includes(-5) && PolaKolka.includes(-6)) ){
        document.getElementById("SrodekPoziom").style.display="block";        
    }else{
        DolPoziom();
    }
}
function DolPoziom(){
    if((PolaKrzyzyka.includes(7) && PolaKrzyzyka.includes(8) && PolaKrzyzyka.includes(9))||
    (PolaKolka.includes(-7) && PolaKolka.includes(-8) && PolaKolka.includes(-9))){
        document.getElementById("DolPoziom").style.display="block";
    }
}