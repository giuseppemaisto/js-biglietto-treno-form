
const BottoneGenera = document.getElementById("genera")

BottoneGenera.addEventListener("click", function(){
    const name = document.getElementById("name").value;
    console.log(name);

    const km = document.getElementById("km").value;
    console.log(km);

    const fasciaEta = document.getElementById("fascia-eta").value;
    console.log(fasciaEta);


    const prezzo = km * 0.21;
    let sconto;


    if(fasciaEta == "minorenne"){
        let sconto = prezzo * 0.80;
        
        console.log( "il prezzo è " + sconto)
    }else if(fasciaEta == "over-65"){
        let sconto = prezzo * 0.60;
        
        console.log( "il prezzo è " + sconto)
    }
    else{
        sconto = prezzo;
        console.log( "il prezzo è " + sconto)
    }

    const carrozza = Math.floor(Math.random() * 10) + 1;
    // creo la variabile carroza che genera un numero casuale tra 1 e 9/
 
    // creo la variabile codiceCp che genera un numero casuale tra 900000 e 999999
    const codiceCp = Math.floor(Math.random() * 100000) + 900000;
   
     // inserisco le variabili: nome, totale, tipo di offerta e codice cp all'interno della parte "crea il biglietto"
   document.getElementById("nome").innerHTML = name;
   document.getElementById("costo-biglietto").innerHTML = prezzo + "€";
   document.getElementById("sconto").innerHTML = sconto;
   document.getElementById("carrozza").innerHTML = carrozza;
   document.getElementById("codice-cp").innerHTML = codiceCp;
   // inserisco le variabili: nome, totale, tipo di offerta e codice cp all'interno della parte "crea il biglietto"/

   // mostra il biglietto quando si clicca il puslante "genera"
   document.getElementById('ticket').classList.add("show");
   // mostra il biglietto quando si clicca il puslante "genera"/


})