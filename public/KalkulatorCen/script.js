

const addButton = document.getElementById("dodaj")
const licz = document.getElementById("oblicz")
let k = 1
let raz = "nie"


addButton.addEventListener('click', function () {
    NewProduct()
})
addButton.addEventListener("a", function () {
    this.style.backgroundColor = "red"
})
addEventListener("DOMContentLoaded", function () {
    NewProduct()
    NewProduct()
})
const nazwyIn = ["", "cena", "ilosc", "objetosc"]
const nazwyOut = ["", "Cena", "Ilość", "Objętość"]
function NewProduct() {

    const ullista = document.getElementById("lista")
    const produkt_div = document.createElement('div')

    for (let i = 1; i <= 3; i++) {
        const label = document.createElement('label')
        const input = document.createElement('input')
        const wynik = document.createElement("h3")

        const button_div = document.createElement('div')
        const wynik_div = document.createElement('div')

        const div = document.createElement('div')
        const usun = document.createElement('button')
        // k = id
        // i = nazwa

        label.htmlFor = nazwyIn[i] + "_" + k
        label.textContent = nazwyOut[i] + ": "
        label.setAttribute("name", nazwyIn[i])
        input.id = nazwyIn[i] + "_" + k

        input.value = i
        input.className = "produkt_input"
        input.type = 'text'
        input.name = nazwyIn[i]
        div.className = 'produkt_dane'

        div.id = 'produkt_' + nazwyIn[i] + "_" + k
        wynik_div.id = "wynik"
        wynik.id = "wynik_" + k



        div.appendChild(label)
        div.appendChild(input)
        wynik.className = "wynik"
        wynik_div.appendChild(wynik)

        produkt_div.className = 'produkt'
        produkt_div.className += ' dodaj'
        produkt_div.id = 'produkt_' + k
        produkt_div.appendChild(div)


        usun.disabled = true

        produkt_div.addEventListener('animationend', () => {

            setTimeout(() => {
                usun.disabled = false
                produkt_div.className = "produkt"
            }, 400);
        });


        // console.log('i-' + i + ' k-' + k)
        if (i == 3) {
            let przedmiotow = (k - 1)
            k++
            usun.textContent = "USUŃ"
            usun.className = 'delete_button'


            usun.addEventListener('click', function () {
                usun.disabled = true
                document.getElementById("oblicz").disabled = true
                document.getElementById("oblicz").className = "oblicz-button oblicz-button-disabled"
                resetPol()
                inpucik()
                produkt_div.addEventListener('animationend', () => {
                    setTimeout(() => {
                        produkt_div.remove()
                        usun.remove()
                        // alert("chuj") 

                        getData()
                        // console.log("przedmiotow: " + przedmiotow + " chujK:" + k)

                        document.querySelectorAll('div[class="produkt"]').forEach((element, index) => {
                            element.id = element.id.replace(/\d+$/, (index + 1))

                        })
                        document.querySelectorAll('h3[class="wynik"]').forEach((element, index) => {
                            element.id = element.id.replace(/\d+$/, (index + 1))

                        })

                        document.querySelectorAll('div[class="produkt_dane"]').forEach((element, index) => {
                            const nr = Math.floor(index / 3) + 1
                            element.id = element.id.replace(/\d+$/, nr)

                        })

                        document.querySelectorAll('input').forEach((element, index) => {
                            // console.log(index)
                            const nr = Math.floor(index / 3) + 1
                            element.id = element.id.replace(/\d+$/, nr)

                        })

                        document.querySelectorAll('label').forEach((element, index) => {
                            const nr = Math.floor((index - 1) / 3) + 1
                            element.htmlFor = element.htmlFor.replace(/\d+$/, nr)

                        })
                    }, 100);
                });
                produkt_div.id = ""


                setTimeout(() => {
                    document.getElementById("oblicz").disabled = false
                    document.getElementById("oblicz").className = "oblicz-button oblicz-button-animacja"
                }, 1900);

                produkt_div.className += " delete"
                k-- // NAJWYZSZE ID W OBECNEJ CHWILI



            })
            button_div.className = "produkt_dane"
            button_div.id = "delete_div"
            button_div.appendChild(usun)

            produkt_div.appendChild(button_div)
            produkt_div.appendChild(wynik_div)
            ullista.appendChild(produkt_div)
            resetPol()
            inpucik()
            wyslijLabel()
        }
    }

}
let produkt = [];

// CENA_1 -> ILOSC_1 -> OBJETOSC_1  ---> PRODUKT 1
function getData() {
    produkt.length = 0;
    const inputs = document.querySelectorAll('input[name="cena"], input[name="ilosc"], input[name="objetosc"]');
    for (let i = 0; i < inputs.length; i += 3) {
        const cena = (inputs[i].value).replace(",", ".");
        const ilosc = (inputs[i + 1].value).replace(",", ".");
        const objetosc = (inputs[i + 2].value).replace(",", ".");
        produkt.push({ cena, ilosc, objetosc });
    }
    // console.log(JSON.stringify(produkt));
    // console.log(produkt)
}

let ceny_produktu = []
licz.addEventListener('click', function () {




    produkt.length = 0;
    ceny_produktu.length = 0;
    getData()
    
    // console.log(produkt[1].cena)


    document.querySelectorAll('input').forEach(el => {
    el.value = el.value.replace(/\s+/g, '');
  });

    function koszt(rzecz, miara, jednostka, pola) {
        resetPol(pola)
        if (produkt.length >= 2) {
            if (miara == 'sztuka') {
                for (let i = 0; i < produkt.length; i++) {
                    let a = produkt[i]
                    let koszt3 = (a.cena / (a.ilosc * a.objetosc)).toFixed(2)
                    let koszt2 = (a.cena / a.objetosc).toFixed(2)

                    if (pola == '2') {
                        ceny_produktu.push({ nr_produktu: i + 1, koszt: koszt2, rzecz: rzecz, miara: miara, jednostka: jednostka });
                    } else {
                        ceny_produktu.push({ nr_produktu: i + 1, koszt: koszt3, rzecz: rzecz, miara: miara, jednostka: jednostka });
                    }

                    if (jednostka == 'plaster') {
                        wynik(i + 1)
                        // console.log(`1 ${rzecz} kosztuje: ${koszt2}zł`)
                    } else {
                        // console.log(`1 ${rzecz} kosztuje: ${koszt3}zł`)
                    }

                }
            } else {
                if (miara == "100") {
                    for (let i = 0; i < produkt.length; i++) {
                        let a = produkt[i]
                        let koszt3 = (100 * (a.cena / a.objetosc)).toFixed(2)
                       
                            ceny_produktu.push({ nr_produktu: i + 1, koszt: koszt3, rzecz: rzecz, miara: miara, jednostka: jednostka });
                        
                        // console.log(`100${jednostka} ${rzecz} kosztuje: ${koszt3}zł`)
                    }
                }
            }

            // console.log(ceny_produktu)
            let min = ceny_produktu[0].koszt;
            let eq = []
            eq.length = 0
            let minadd = 'nie'
            let minindex = 0

            for (let i = 1; i < ceny_produktu.length; i++) {

                for (let i = 1; i < ceny_produktu.length; i++) {

                    // TANSZE OD PIERWSZEGO
                    if (ceny_produktu[i].koszt < min) {
                        min = ceny_produktu[i].koszt;

                        minindex = i

                        document.querySelectorAll(`div`).forEach(element => {
                            if (element.id == `produkt_${minindex + 1}`) {
                                element.style.backgroundColor = "var(--tanszy)"
                            } else {
                                if (element.id == `produkt_${i}`) {
                                    element.style = "";
                                }
                            }
                        })
                        // console.log("Najmniejsza cena to: " + min + ", nr_produktu: " + ceny_produktu[i].nr_produktu)

                    } else {

                        // JEZELI PIERWSZY JEST  TANSZY
                        if (min < ceny_produktu[i].koszt) {
                            wynik(minindex + 1)
                            document.querySelectorAll(`div`).forEach(element => {
                                if (element.id == `produkt_${minindex + 1}`) {
                                    element.style.backgroundColor = "var(--tanszy)"
                                } else {
                                    if (element.id == `produkt_${i}`) {
                                        element.style = "";
                                    }
                                }
                            })
                        }
                    }
                }
                // JEZELI NIE MA NAJTANSZEGO SA ROWNE SOBIE
                // console.log(i)
                if (ceny_produktu[i].koszt == min) {
                    if (minadd == 'nie') {
                        eq.push(minindex + 1)
                        minadd = 'tak'
                    }
                    eq.push(ceny_produktu[i].nr_produktu)
                    // console.log(ceny_produktu)
                    // console.log(eq)
                    // console.log(minindex + 1 + " dasda = "); console.log(eq)
                    // console.log(minindex + 1)
                    // console.log(i + "u")
                    wynik(eq)
                    for (let k = 0; k < eq.length; k++) {

                        document.querySelectorAll(`div[id='produkt_${eq[k]}']`).forEach(element => {
                            element.style.backgroundColor = "var(--tanszy)"
                        })
                    }
                    // console.log("Najtansze produkty to: " + ceny_produktu[i].nr_produktu + ", z ceną: " + ceny_produktu[i].koszt)
                }
            }

        } else {
            // console.log(produkt.length)
            // console.log("nie ma 2")
            const dodaj = document.getElementById("dodaj")
            // dodaj.className = 'dodaj-button'
            // dodaj.style.animation = "nedeed 2s ease forwards"
            dodaj.className = 'dodaj-button dodaj-button-needed'
            setTimeout(() => {
                dodaj.className = 'dodaj-button dodaj-button-animacja'
            }, 1200);
        }
    }




    // console.log(ceny_produktu)
    const produkty_wybor = document.getElementById("typ")
    const wybrany_produkt = produkty_wybor.value
    switch (wybrany_produkt) {
        case "0":
            alert("Wybierz produkt")
            break;
        case "1":
            koszt("Rolka papieru", 'sztuka')
            break;
        case "2":
            koszt("Jajko", 'sztuka')
            break;
        case "3":
            koszt("Kapsułka", 'sztuka')
            break;
        case "4":
            koszt("Mleka", '100', "ml")
            break;
        case "5":
            koszt("Mięsa", "100", "g")
            break;
        case "6":
            koszt("Plaster mięsa", 'sztuka', 'plaster', '2')
            break;
        case "7":
            koszt("Sera", '100', 'g', '2')
            break;
        case "8":
            koszt("Plaster sera", "sztuka")
            break;
        case "9":
            koszt("Masła", '100', 'g')
            break;
        case "10":
            koszt("Rzecz", "sztuka", "", '2')
            break;
        case "11":
            koszt("Produktu", "100", 'ml')
            break;
    }
})




function wynik(id) {
    for (let i = 0; i < ceny_produktu.length; i++) {
        const wynik = document.getElementById(`wynik_${i + 1}`)
        if (ceny_produktu[i].miara == 'sztuka') {
            // console.log(ceny_produktu)
            // console.log(i + 1 + " i+1")
            const koscik = parseFloat(ceny_produktu[i].koszt)
            if(isNaN(koscik) || !isFinite(koscik) || koscik < 0 ){
                wynik.textContent = 'Podaj wszystkie wartości i/lub które nie są 0 lub ujemne.'
            }else{
                wynik.textContent = `1 ${ceny_produktu[i].rzecz} kosztuje: ${ceny_produktu[i].koszt}zł`
            }
        } else {
            if (ceny_produktu[i].miara == '100') {
                wynik.textContent = `${ceny_produktu[i].miara} ${ceny_produktu[i].jednostka} ${ceny_produktu[i].rzecz} kosztuje: ${ceny_produktu[i].koszt}zł`
            }
        }
    }
}

document.getElementById("typ").addEventListener('change', function () {
    document.getElementById("lista").style.disabled = true
    wyslijLabel()
})
function wyslijLabel() {


    const produkty_wybor = document.getElementById("typ")

    const wybrany_produkt = produkty_wybor.value
    const wybranaNazwa = produkty_wybor.options[produkty_wybor.selectedIndex].text;



    const wyswietl_nazwe = () => { }
    switch (wybrany_produkt) {
        case "1":
            changeLabel('nazwij', "objetosc", "Ilość rolek:")
            changeLabel('nazwij', "ilosc", "Ilość:")
            wyswietl_nazwe()
            break;

        case "2":
            changeLabel('nazwij', "objetosc", "Ilość jajek:")
            changeLabel('nazwij', "ilosc", "Ilość:")
            wyswietl_nazwe()
            break;

        case "3":
            changeLabel('nazwij', "objetosc", "Ilość kapsułek:")
            changeLabel('nazwij', "ilosc", "Ilość:")
            wyswietl_nazwe()
            break;

        case "4":
            changeLabel('nazwij', "objetosc", "Pojemność:")
            changeLabel('nazwij', "ilosc", "Ilość kartonów:")
            wyswietl_nazwe()
            break;

        case "5":
            changeLabel('nazwij', "objetosc", "Podaj wage: ")
            changeLabel('nazwij', "ilosc", "Ilość:")
            wyswietl_nazwe()
            break;

        case "6":
            changeLabel('nazwij', "objetosc", "Ilość plastrów:")
            changeLabel("usun", 'ilosc', "")
            wyswietl_nazwe()
            break;

        case "7":
            changeLabel('nazwij', "objetosc", "Podaj wage: ")
            changeLabel("usun", 'ilosc', "")
            wyswietl_nazwe()
            break;

        case "8":
            changeLabel('nazwij', "objetosc", "Ilość plastrów:")
            changeLabel('nazwij', "ilosc", "Ilość:")
            wyswietl_nazwe()
            break;

        case "9":
            changeLabel('nazwij', "objetosc", "Podaj wage:")
            changeLabel('nazwij', "ilosc", "Ilość kostek:")
            wyswietl_nazwe()
            break;

        case "10":
            changeLabel('nazwij', "ilosc", "Ilość:")
            changeLabel('nazwij', 'objetosc', 'Podaj wage:')
            changeLabel('usun', 'objetosc', "")
            wyswietl_nazwe()
            break;

        case "11":
            changeLabel('nazwij', "objetosc", "Pojemność:")
            changeLabel('nazwij', 'ilosc', "Ilość butelek:")
            wyswietl_nazwe()
            break;
        default:
            // console.log("Nie wybrano nic")
            break;
    }
}
function changeLabel(akcja, typ, nazwa) {

    const label_objetosc = document.querySelectorAll(`label[name="objetosc"]`)
    const input_objetosc = document.querySelectorAll(`input[name="objetosc"]`)

    const label_ilosc = document.querySelectorAll(`label[name="ilosc"]`)
    const input_ilosc = document.querySelectorAll(`input[name="ilosc"]`)

    switch (akcja) {
        case "nazwij":
            resetPol()
            if (typ == "objetosc") {
                label_objetosc.forEach(element => {
                    if (nazwa != "") {
                        element.textContent = nazwa.trim()
                    }
                })
            } else {
                if (typ == "ilosc") {
                    label_ilosc.forEach(element => {
                        if (nazwa != "") {
                            element.textContent = nazwa.trim()
                        }
                    })
                }

            }
            break;
        case "usun":
            resetPol()
            if (typ == 'objetosc') {
                label_objetosc.forEach(element => {
                    element.style.display = "none"
                })
                input_objetosc.forEach(element => {
                    element.style.display = "none"
                })

            } else if (typ == 'ilosc') {
                resetPol()
                label_ilosc.forEach(element => {
                    element.style.display = 'none'
                })
                input_ilosc.forEach(element => {
                    element.style.display = 'none'
                })
            }
    }
}
function resetPol(ile) {

    if(ile != '2'){
        document.querySelectorAll("label, input").forEach(element => {
            element.style.display = 'block '
        })
    }



    document.querySelectorAll('div[class="produkt"]').forEach(element => {
        element.style = "";

    })




    for (let i = 0; i <= ceny_produktu.length; i++) {

        document.querySelectorAll(`h3[id="wynik_${i}"]`).forEach(element => {
            element.textContent = ""
        })
    }

}

function inpucik() {

    // document.querySelectorAll("input").forEach(element => {
    //     element.addEventListener("input", function () {
    //         resetPol()
    //     })
    // })
}