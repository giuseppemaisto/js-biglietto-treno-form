
const BottoneGenera = document.getElementById("genera")

BottoneGenera.addEventListener("click", function(){
    const name = document.getElementById("name").value;
    console.log(name);

    const km = document.getElementById("km").value;
    console.log(km);

    const fasciaEta = document.getElementById("fascia-eta").value;
    console.log(fasciaEta);


    const prezzo = km * 0.21;
   


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
   

})