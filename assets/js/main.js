// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

/**************************************************
function revString(str) {
  var splString = str.split("");
  // ["h", "o", "m", "e", "r"]
  var revArray = splString.reverse();
  // ["r", "e", "m", "o", "h"]
  return revArray.join("");
  // "remoh"
}*************************************************/

// Chiediamo all'utente di inserire una parola
var parola = String(prompt("Inserisci una parola")).toLowerCase();
// Creiamo la funzione che inverte la parola 
function revString(parola) {
  return parola.split("").reverse().join("");
}
    // Assegamo ad una variabile il risulatato 
    var parolaContrario = revString(parola);
    
    //confrontiamo la parola inserita con il risultato della funzione
    if (parola == parolaContrario) {
        alert("La parola inserita é palindroma")
    } else {
        alert("La parola inserita non é palindroma")
    }