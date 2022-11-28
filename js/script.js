
const BottoneGenera = document.getElementById("genera")

BottoneGenera.addEventListener("click", function(){
    const name = document.getElementById("name").value;
    console.log(name);

    const km = document.getElementById("km").value;
    console.log(km);

    const fascia_eta = document.getElementById("fascia-eta").value;
    console.log(fascia_eta);


    const prezzo = km * 0.21;
    console.log("il prezzo è " + prezzo)
})