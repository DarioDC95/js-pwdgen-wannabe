// GENERARE UNA PASSWORD CASUALE

// Chiedo il nome
let ask_name = prompt("Inserisci il tuo nome");
console.log(ask_name);
// Chiedo il cognome
let ask_surname = prompt("Inserisci il tuo cognome");
console.log(ask_surname);
// Chiedo il colore preferito
let ask_favourite_color = prompt("Inserisci il tuo colore preferito");
console.log(ask_favourite_color);
// Collido i valori delle variabili precedenti
let password_result = ask_name + ask_surname + ask_favourite_color + "21"
console.log(password_result)
// Inserisco il risultato nell'HTML
document.getElementById("password").innerHTML = document.getElementById("password").innerHTML + " " + password_result
console.log(document.getElementById("password").innerHTML)