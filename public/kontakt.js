function wyslij(){
    const imie = document.getElementById("imie");
    const wiadomosc = document.getElementById("wiadomosc");
    if(imie.value===""){
        alert("Podanie swojego imienia jest -> !WYMAGANE! <-");
    return;
    }
    if(wiadomosc.value===""){
        alert("Podanie swojej wiadomosci jest -> !WYMAGANE! <-");
        return;
    }
    alert("Formularz został poprawnie wypełniony, wiadomość została wysłana. ");

    imie.value=""
    wiadomosc.value=""
}  
