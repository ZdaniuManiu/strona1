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
        element("przyciski1").classList.add("aktywny");
        element("przyciski11").classList.remove("aktywny");
    }else{
        element("PierwszaAplikacja").style.display="block";
        element("przyciski11").classList.add("aktywny");
        element("przyciski1").classList.remove("aktywny");
        
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
        element("przyciski2").classList.add("aktywny");
        element("przyciski22").classList.remove("aktywny");
    }else{
        element("DrugaAplikacja").style.display="block";
        element("przyciski22").classList.add("aktywny");
        element("przyciski2").classList.remove("aktywny");
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
        element("przyciski3").classList.add("aktywny");
        element("przyciski33").classList.remove("aktywny");
    }else{
        element("TrzeciaAplikacja").style.display="block";
        element("przyciski33").classList.add("aktywny");
        element("przyciski3").classList.remove("aktywny");
    }
}

