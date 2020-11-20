// Pari e Dispari
// L’utente sceglie pari o dispari e
// inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

/**************************************************

function numeroRandom() {

    return numRandom[Math.floor(Math.random() * 5 )];
}

/* function sommaNumeri(num1, num2) {
 alert(num1 + num2);
}
sommaNumeri(3, 4); 

}*************************************************/

// var parola = String(prompt("Inserisci una parola")).toLowerCase();
// function revString(parola) {
//   return parola.split("").reverse().join("");
// }
//     var parolaContrario = revString(parola);
//     console.log(parolaContrario);

//     if (parola == parolaContrario) {
//         alert("La parola inserita é palindroma")
//     } else {
//         alert("La parola inserita non é palindroma")
//     }


// valore boolean (Pari = true) (Dispari = False)
var pariDispari;
var pdSelect = prompt("Inserisci Pari o dispari").toLowerCase();

// controliamo se l'utente (Pari = true) (Dispari = False)
if (pdSelect !== "pari" && pdSelect !== "dispari") {
  alert("Il valore inserito é errato");
} else if (pdSelect == "dispari") {
  pariDispari = false;
} else  {
  pariDispari = true;
}
console.log(pariDispari);

// l'utente inserisce un numero per iniziare a giocare 
var NumberUser = prompt("Inserisci un numero da 1 a 5 per iniziare a giocare");

// Creiamo la funzione che genera un numero da 1 a 5 per il PC 
