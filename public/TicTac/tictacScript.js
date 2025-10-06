
let wygrane = [[1, 2, 3], [4, 5, 6], [7, 8, 9], // poziome
[1, 4, 7], [2, 5, 8], [3, 6, 9], // pionowe
[1, 5, 9], [3, 5, 7]]         // skos
const tabela = document.getElementById("tabela")
const bodyTabela = document.getElementById("bodyTabela")
const startButton = document.getElementById("startButton")
const wyborText = document.getElementById("wyborText")
const wyborcont = document.getElementById("wybor_container")
const linia = document.getElementById("linia")

const pickKrzyzyk = document.getElementById("pick_player_krzyzyk");
const pickKolko = document.getElementById("pick_player_kolko")
let gracz
let StanGry
let polaKolka = []
let polaKrzyzyka = []
let lastClassWin = ''






// PRZYCISK "ROZPOCZNIJ GRE" ODPOWIADA ZA START GRY ORAZ JEGO RESTART
startButton.addEventListener('click', function () {
    StanGry = 'PickingPlayer'
    wyborText.style.visibility = "visible"
    wyborcont.style.border = "2px solid black"
    wyborcont.style.borderRadius = "15px"
    wyborcont.style.marginBottom = '0'
    pickPlayer() // przechodzi do funkcji wyboru gracza
    if (lastClassWin != "") {
        
        linia.classList.remove(...lastClassWin.trim().split(" "));
        console.log(lastClassWin)
    }
    document.querySelectorAll("td").forEach(element => { // zmienia dla kazdego 'td'
        element.dataset.gracz = "brak"
        element.dataset.klikniete = 'nie'
        element.style.cursor = 'not-allowed'
        element.style.backgroundImage = 'url()'
        element.classList.remove('active-cell')
    })
})


// FUNKCJA ODPOWIEDZIALNA ZA WYŁĄCZENIE GŁÓWNEGO PRZYCISKU 
function pickPlayer() {
    startButton.cursor = 'not-allowed' //ustawia kursor przycisku 'rozpocznij gre' na nieaktywny
    startButton.disabled = true // oraz go wylacza

    playerPicked(0) // WYSYŁA 0 ZEBY WLACZYC PRZYCISKI DO WYBORU GRACZA

}


//FUNKCJA ODP ZA WYBRANIE KRZYŻYKA
pickKrzyzyk.addEventListener('click', function () {
    gracz = 'krzyzyk' // USTAWIA GRACZA JAKO KRZYZYK
    currentPlayer()
    playerPicked(1) // wylacza obydwa przyciski
    startGame() // rozpoczyna gre
})

//FUNKCJA ODP ZA WYBRANIE KÓŁKA
pickKolko.addEventListener('click', function () { // przycisk 'kolko'
    gracz = 'kolko' // to samo co powyzej
    currentPlayer()
    playerPicked(1)
    startGame()
})



//JEŻELI GRACZ JEST WYBRANY (1) TO WYŁĄCZA PRZYCISKI DO WYBORU
function playerPicked(stan) {
    if (stan == 1) { // 1 = wyłączone, 0 = włączone
        pickKrzyzyk.disabled = true
        pickKolko.disabled = true
    } else {
        pickKrzyzyk.disabled = false
        pickKolko.disabled = false
    }
}


//FUNKCJA NIE PRZYPISANA DO ŻADNEGO PRZYCISKU ODPOWIADA ZA ODBLOKOWANIE PÓL DO GRY
function startGame() {
    wyborText.style.visibility = "hidden"
    wyborcont.style.border = ""
    StanGry = 'Rozpoczeta' // ustawia stan gry na rozpoczeta
    tabela.style.cursor = "unset" // odblokowuje kursor
    document.querySelectorAll("td").forEach(element => { // zmienia dla kazdego 'td'
        element.style.cursor = 'pointer' // ustawia kursor po starcie gry
        element.className += ' active-cell' // dodaje klase po starcie gry
    })
}


//FUNKCJA ODPOWIEDZIALNA ZA RESTART STANU GRY
function restart() {
    polaKolka = []
    polaKrzyzyka = []
    startButton.disabled = false
    gracz = 'brak'
    StanGry = 'GameEnded'
    currentPlayer()
}


//USTAWIA PRZYCISKI "Krzyżyk" i "Kółko" W ZALEŻNOŚCI OD OBECNEGO RUCHU
function currentPlayer() {
    if (gracz == 'kolko') { // kolko
        pickKolko.style.backgroundColor = "var(--kolor-aktywnego)" // zielony
        pickKolko.style.color = 'black'
        pickKrzyzyk.style.color = 'red'
        pickKrzyzyk.style.backgroundColor = "var(--kolor-not-aktywnego)" // czerwony
    } else { // krzyzyk
        pickKolko.style.backgroundColor = "var(--kolor-not-aktywnego)"
        pickKolko.style.color = 'red'
        pickKrzyzyk.style.color = 'black'
        pickKrzyzyk.style.backgroundColor = "var(--kolor-aktywnego)"
    } // POMAGA W RESECIE PLANSZY GDY NIE MA ŻADNEGO GRACZA
    if (gracz == "brak") {
        pickKolko.style.backgroundColor = ""
        pickKrzyzyk.style.backgroundColor = ""
        pickKolko.style.color = ''
        pickKrzyzyk.style.color = ''
    }
}



for (let i = 1; i <= 3; i++) { // tworzenie planszy
    const row = document.createElement("tr") // tworzy rzad

    for (let ii = 1; ii <= 3; ii++) {
        const cell = document.createElement("td") // tworzy komorki
        cell.className = "cell"
        row.appendChild(cell); // dodaje komorki do rzedow
        cell.dataset.klikniete = "nie" // ustawia ze pole podstawowo nie jest klikniete 


        // FUNKCJA ODPOWIEDZIALNA ZA POLA DO GRY

        cell.addEventListener('click', function () { // nasluchuje na klikniecia na kazda komorke td


            if (StanGry == "Rozpoczeta") {


                // STAN GRY - ROZPOCZETY      

                //SPRAWDZANIE ZAJĘCIA POLA PO KLIKNIĘCIU, JEŻELI NIE JEST, TO JE KLIKA
                if (cell.dataset.klikniete == "nie") { // sprawdza czy pole jest klikniete
                    cell.dataset.klikniete = "tak" // ustawia pole na klikniete



                    // SPRAWDZENIE GRACZA I DODANIE MU POLA 
                    //KOLKO
                    if (gracz == "kolko") { // jezeli gracz jest kolkiem
                        cell.style.backgroundImage = "url(TicTac/kolko.png)"
                        cell.dataset.gracz = "kolko" // ustawia ze pole nalezy do kolka
                        polaKolka.push(+cell.id) //dodaje pole dla kolka
                        console.log("Kolko: " + polaKolka)
                        gracz = 'krzyzyk'  // zmienia gracza na przeciwnego
                        currentPlayer()
                        //KRZYZYK
                    } else { // jezeli gracz nie jest kolkiem, czyli jest krzyzykiem
                        cell.dataset.gracz = "krzyzyk" // ustawia ze pole nalezy do krzyzyka
                        cell.style.backgroundImage = "url(TicTac/krzyzyk.png)"
                        polaKrzyzyka.push(+cell.id) // dodaje pole dla krzyzyka
                        console.log("Krzyzyk: " + polaKrzyzyka)
                        gracz = 'kolko' // zmienia gracza na przeciwnego
                        currentPlayer()
                    }

                    //JEŻELI POLE JEST ZAJĘTE
                } else {
                    //alert("Pole jest już zajęte")
                }




                // STAN GRY - NIE ROZPOCZETE
            } else {

                // TROCHE SMIESZNA KOLEJNOSC ALE BEKA PIERW SPRAWDZA CZY GRA JEST JUŻ SKONCZONA
                if (StanGry == 'GameEnded') {
                    //alert("Pierw rozpocznij nową gre!")


                    // JEZELI NIE JEST SKONCZONA TO ZNACZY ZE MOŻE BYC NA WYBIERANIU GRACZA
                } else
                    if (StanGry == 'PickingPlayer') { // jezeli stan gry jest na wyborze gracza
                        alert("Pierw wybierz gracza!")

                        // JEZELI NIE JEST NA WYBORZE GRACZA TO ZNACZY ZE NIE JEST ZACZETA
                    } else {
                        // alert("Pierw rozpocznij gre!");
                    }
            }


            //sprawdzanie wygranej przy kazdym kliknieciu
            const wygranaKombinacjaKolka = wygrane.find(kombinacja => kombinacja.every(nr => polaKolka.includes(nr)))
            const wygranaKombinacjaKrzyzyka = wygrane.find(kombinacja => kombinacja.every(nr => polaKrzyzyka.includes(nr)))

            //wygrana kolka
            if (wygranaKombinacjaKolka) {
                setTimeout(() => { wynikWygranej(wygranaKombinacjaKolka); restart() }, 50);



                //wygrana krzyzyka
            } else if (wygranaKombinacjaKrzyzyka) {
                setTimeout(() => { wynikWygranej(wygranaKombinacjaKrzyzyka); restart() }, 50);



                //remis
            } else if (polaKrzyzyka.length == 5 && polaKolka.length == 4 || polaKrzyzyka.length == 4 && polaKolka.length == 5) {
                setTimeout(() => { alert("REMIS!"); restart(); }, 250);
            }

        });

    }
    bodyTabela.appendChild(row) // dodaje wszystkie rzedy do body tabeli
}



//SPRAWDZENIE W JAKI SPOSÓB GRACZ WYGRAŁ
function wynikWygranej(kombinacja) {
    const kombinacjaFloat = kombinacja.join('')
    console.log("Wygrana kombinacja: " + kombinacja)


    
    // document.querySelectorAll("td").forEach(element => {        
            
            // for (let i = 0; i <= kombinacja.length; i++) {
                //console.log(i)
                // if (element.id == kombinacja[i]) {
                // element.style.backgroundColor = "#f6090970"
                // element.className += ' wygrane_pola'
                // lastClassWin += ' wygrane_pola'
            // }
        
        // }
            
    // })


    let wygranePion = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
    let wygranePoziom = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let wygraneSkos = [[1, 5, 9], [3, 5, 7]];

    if (wygranePion.find(kombinacja1 => kombinacja1.every(nr => kombinacja.includes(nr)))) { // wygrane pion
        lastClassWin += ' linia_wygranej_pion linia_wygranej_pion_animacja'
        linia.className += lastClassWin.trim()

    } else if (wygranePoziom.find(kombinacja2 => kombinacja2.every(nr => kombinacja.includes(nr)))) { // wygrane poziom
        lastClassWin += ' linia_wygranej_poziom linia_wygranej_poziom_animacja'
        linia.className += lastClassWin.trim()


    } else if (wygraneSkos.find(kombinacja3 => kombinacja3.every(nr => kombinacja.includes(nr)))) { // wygrane skos
        lastClassWin = ' linia_wygranej_skos'
        linia.className += lastClassWin.trim()
        console.log("skos")
    }

    linia.className += ' a' + kombinacjaFloat
    lastClassWin += ' a' + kombinacjaFloat
}

const allCell = document.querySelectorAll("td");
allCell.forEach((element, index) => { //nadawanie ID dla komórek
    element.id = index + 1
});

const rows = ['FirstRow', 'SecondRow', 'ThirdRow'];
const allRow = document.querySelectorAll("tr")
allRow.forEach((element, index) => { //nadawanie ID dla rzędów
    element.id = rows[index];
});
