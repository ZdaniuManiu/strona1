const element = (identyfikator) => document.getElementById(identyfikator);
function SprawdzPierwszyPrzycisk(){
    if(element("PierwszaAplikacja").style.display=="block"){;
        PokazPierwszaAplikacja(1);
    }else{
        PokazPierwszaAplikacja(0);
}
}
function PokazPierwszaAplikacja(stan){
    if(stan==1){
        element("PierwszaAplikacja").style.display="none";
    }else{
        element("PierwszaAplikacja").style.display="block";
    }
}

function SprawdzDrugiPrzycisk(){
    if(element("DrugaAplikacja").style.display=="block"){;
        PokazDrugaAplikacje(1);
    }else{
        PokazDrugaAplikacje(0);
}
}
function PokazDrugaAplikacje(stan){
    if(stan==1){
        element("DrugaAplikacja").style.display="none";
    }else{
        element("DrugaAplikacja").style.display="block";
    }
}

function SprawdzTrzeciPrzycisk(){
    if(element("TrzeciaAplikacja").style.display=="block"){;
        PokazTrzeciaAplikacje(1);
    }else{
        PokazTrzeciaAplikacje(0);
}
}
function PokazTrzeciaAplikacje(stan){
    if(stan==1){
        element("TrzeciaAplikacja").style.display="none";
    }else{
        element("TrzeciaAplikacja").style.display="block";
    }
}