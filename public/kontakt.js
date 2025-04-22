// Sprawdzanie, czy wiadomość nie jest pusta
const wiadomoscInput = document.getElementById("wiadomosc");
const button = document.getElementById("button");

function CzyWypelnione(){
wiadomoscInput.addEventListener("input", function() {
    if (wiadomoscInput.value.trim() !== "") {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});
}

// Funkcja do walidacji formularza
function wyslij(event) {
const imie = document.getElementById("imie");
const wiadomosc = document.getElementById("wiadomosc");

// Sprawdzanie, czy pole email i wiadomość są wypełnione
    if (imie.value === "") {
        alert("Podanie swojego emaila jest -> !WYMAGANE! <-");
    return;
}
    if (wiadomosc.value === "") {
        alert("Podanie swojej wiadomości jest -> !WYMAGANE! <-");
    return;
}

// Jeśli wszystko jest OK, wysyłamy formularz
document.getElementById("formularz").submit();
}

// Ustawiamy nasłuchiwacz na formularz
document.getElementById("formularz").addEventListener("submit", wyslij);
CzyWypelnione();
