
const BottoneGenera = document.getElementById("genera")

BottoneGenera.addEventListener("click", function(){
    const name = document.getElementById("name").value;
    console.log(name);

    const km = document.getElementById("km").value;
    console.log(km);

    const fasciaEta = document.getElementById("fascia-eta").value;
    console.log(fasciaEta);


   let prezzo;
    


    if(fasciaEta == "minorenne"){
        prezzo = 0.21 * km * 0.80;
        
        console.log( "il prezzo è " + prezzo)
    }else if(fasciaEta == "over-65"){
        prezzo = 0.21 * km * 0.60;
        
        console.log( "il prezzo è " + prezzo)
    }
    else if (eta = 'maggiorenne'){
        prezzo = 0.21 * km;
        console.log( "il prezzo è " + prezzo)
    }
    else{
        alert('DEVI SELEZIONARE UN ETA')
    }

    const carrozza = Math.floor(Math.random() * 10) + 1;
   
    const codiceCp = Math.floor(Math.random() * 100000) + 900000;
   
    
   document.getElementById("nome").innerHTML = name;
   document.getElementById("costo-biglietto").innerHTML = prezzo + "€";
   document.getElementById("sconto").innerHTML = prezzo;
   document.getElementById("carrozza").innerHTML = carrozza;
   document.getElementById("codice-cp").innerHTML = codiceCp;
 
   document.getElementById('ticket').classList.add("show");
   


})

const BottoneAnnulla = getElementById("annulla")

