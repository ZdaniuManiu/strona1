function SprawdzPierwszyPrzycisk(){
    if(document.getElementById("PierwszaAplikacja").style.display=="block"){;
        PokazPierwszaAplikacja(1);
    }else{
        PokazPierwszaAplikacja(0);
}
}
function PokazPierwszaAplikacja(stan){
    if(stan==1){
        document.getElementById("PierwszaAplikacja").style.display="none";
    }else{
        document.getElementById("PierwszaAplikacja").style.display="block";
    }
}