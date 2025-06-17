// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia…
// Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscolo
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”

// 🎯 BONUS
// Se è null: stampa “Il dato è vuoto”
// Se è un array: stampa la sua lunghezza
// Se è una Promise: attendi che si risolva e stampa il valore del resolve.

let data: unknown;

// data = "prova";
// data = 6;
// data = true;
// data = null;
// data = ["hello", "world"];
data = new Promise((resolve) => resolve("Successo!"));
console.log(data);

if (typeof data === "string") {
  console.log(data.toUpperCase());
} else if (typeof data === "number") {
  console.log(data * 2);
} else if (typeof data === "boolean") {
  console.log(data ? "si" : "no");
} else if (data === null) {
  console.log("Il dato è vuoto");
} else if (Array.isArray(data)) {
  console.log(data.length);
} else if (data instanceof Promise) {
  data.then((result) => {
    console.log(result);
  });
} else {
  console.log("Tipo non supportato");
}
