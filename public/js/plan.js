
const godziny = ["8:00 - 8:45","8:50 - 9:35","9:40 - 10:25","10:35 - 11:20","11:25 - 12:10","12:15 - 13:00","13:05 - 13:50","13:55 - 14:40"]//CONST
const przedmioty = ["-- Wybór Lekcji --", "Matematyka", "Polski","Biologia","Angielski","Informatyka","Chemia","Wychowanie Fizyczne","Geografia","Historia","Projektowanie Stron Internetowych"];//CONST
const dniTygodnia = 5;//CONST
const tbody = document.querySelector("#plan-lekcji tbody");//CONST

for (let i = 0; i < godziny.length; i++) { // liczy ilosc wartosci w godziny, czyli 8, dodaje komórki z godzina[i- to odpowiednia kazdej kolejnej wartosci wraz z kolejnmi komorkami]
  const tr = document.createElement("tr");
  const thGodzina = document.createElement("th");

  thGodzina.id = `godzina${i+1}`; // Kazda godzina ma swoje id 
  
  thGodzina.textContent = godziny[i];//Wpisuje godziny w komorki
  tr.appendChild(thGodzina); // dodaje komorki do strony

  for (let j = 0; j < dniTygodnia; j++) { // dodaje selecty z idkami do komórek zgodnie z ilosci dni w tygodniu
    const td = document.createElement("td");
    const select = document.createElement("select");
    const lekcja = document.createElement("p")


    select.name = `lekcja${i + 1}_dzien${j + 1}`;  // kazdy //select ma swoja nazwe
    lekcja.id = `wybrana-lekcja${i + 1}_dzien${j + 1}`;  //kazda lekcja ma swoja nazwe
    lekcja.textContent = ""; // kazda lekcja jest poczatkowo pusta

    przedmioty.forEach((nazwa, index) => { //dla kazdego przedmiotu do wyboru z tablicy przedmioty dodaje index, matematyka = 1, itd..
      const opcja = document.createElement("option");

      opcja.textContent  = nazwa; // wartosc komorki to jeden przedmiot czyli jedna wartosc nazwa 
      opcja.value = index; // to samo tylko z indexem
      select.appendChild(opcja); // dodaje opcje do selecta
      if (index === 0){ // jeżeli index=0 czyli, jest to pierwsza opcja, to: W tym przypadku chodzi nam o '--wybierz lekcje--'
        opcja.disabled = true; // wylacza opcje 
        opcja.selected = true;// wybiera opcje jako domyślną
      }
      select.appendChild(opcja); // dodaje opcje do selecta
    });
    td.appendChild(lekcja); // dodaje lekcje do komorki
    td.appendChild(select); // dodaje selecta do komorki
    tr.appendChild(td); // dodaje komorke do wiersza
  }
  tbody.appendChild(tr); // dodajesz wiersz do body tabeli 
}

const p1 = document.getElementById("p1"); //CONST
const p2 = document.querySelectorAll("p");//CONST
const selected = document.querySelectorAll("select");//CONST


function zmienplan(){
if(p1.style.display == "block"){
  PokazPlan(1);
}else{
  PokazPlan(0);
}
}

function PokazPlan(stan){
if (stan == 1){
  selected.forEach(select => {select.style.display="block";}); // POKAZUJE WYBOR
  p2.forEach(p => {p.style.display="none";});
  p1.style.display="none";   
}else{
  p2.forEach(p => {p.style.display="block";});
  selected.forEach(select => {select.style.display="none"}); // CHOWA WYBOR
  p1.style.display="block";
}
};

const opcja = document.querySelectorAll('select');

opcja.forEach(select => { //dodanie lekcji do planu jako tekst
select.addEventListener("change", () => { 
const WybranaOpcja = select.options[select.selectedIndex];
const WybranyPrzedmiot = WybranaOpcja.textContent;
const WartoscOpcji = WybranaOpcja.value;


if(WartoscOpcji != 0){
  const IdSelecta = select.name;
  const IdParagrafu = "wybrana-" + IdSelecta;
  const Paragraf = document.getElementById(IdParagrafu);

  Paragraf.textContent=WybranyPrzedmiot;
}
});
});
