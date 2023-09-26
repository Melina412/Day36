// * Aufgabe 1_1 ******************************************
console.log(
  "%c Aufgabe 1_1 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung:
// In dieser Übung wirst du forEach() kennenlernen. Die Methode wird dir noch häufig begegnen.
// Schreibe eine Funktion myDrinks(), die jedes Element eines Arrays in deiner Konsole ausgibt und mit document.write() in deine index.html schreibt.
// Verwende die Liste aus dem Code-Snippet und sortiere das Array getraenke vorher alphabetisch.

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

function myDrinks(drink) {}
getraenke.sort();
getraenke.forEach((drink) => console.log(drink));
getraenke.forEach((drink) => document.write(`${drink} </br>`));

//
//
//
// * Aufgabe 1_2 ******************************************
console.log(
  "%c Aufgabe 1_2 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung:
// In dieser Übung lernst du map() kennen. Dies ist ebenfalls eine Methode, die sehr viel genutzt wird.
// Nutze das Array getraenke aus der vorherigen Übung oder aus dem Code-Snippet.
// Nutze die map()-Methode, um in der neuen Variable upperDrinks alle Getränke in Großbuchstaben zu speichern.
// Wende nun die map() Funktion auf dein Array getraenke an.
// Gib nun upperDrinks in der Konsole aus.
// Hinweis:
// Folgende Befehle brauchst du: toUpperCase(), map() und return
// Bonus:
// Versuche, deine Funktion in eine ArrowFunction umzuwandeln

console.log("~~~~~~~~~~ function:");
function upperDrinks(drink) {}
getraenke.map((drink) => console.log(drink.toUpperCase()));

console.log("~~~~~~~~~~ arrow function:");
const upper_drinks = getraenke.map((drink) => console.log(drink.toUpperCase()));

//
//
//
// * Aufgabe 1_3 ******************************************
console.log(
  "%c Aufgabe 1_3 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung:
// Schreibe eine Funktion, die jeden Wert aus dem Array (siehe Code-Snippet) mit 2 multipliziert und das Ergebnis sortiert

let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

array.sort((a, b) => a - b);
// console.log(array);

const multiplied_array = array.map((num) => num * 2);
console.log(multiplied_array);

//
//
//
// * Aufgabe 1_4 ******************************************
console.log(
  "%c Aufgabe 1_4 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung:
// Schreibe eine Funktion, die mit Hilfe von map() ein Array aus Temperaturen von Fahrenheit in Celsius umwandelt.
// Verwende die mathematische Formel celsius = (℉ - 32) / 1.8 zur Umrechnung.
// Verwende das Array aus dem Code-Snippet.
// Überprüfe das Ergebnis in der Konsole.

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celcius = fahrenheit.map((grad) => Math.round((grad - 32) / 1.8));
console.log(celcius);

//
//
//
// * Aufgabe 1_5 ******************************************
console.log(
  "%c Aufgabe 1_5 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung:
// Verwende die Variable checkNumber und map().
// Überprüfe mit einem if-Statement, ob die Zahl durch 3 teilbar ist.
// Wenn ja, addiere 100 zu dieser Zahl hinzu.
// Gib das Ergebnis in der Konsole aus.

let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

function isDividable(num) {
  if (num % 3 === 0) {
    return num + 100;
  } else {
    return num;
  }
}

const check = checkNumber.map(isDividable);
console.log(check);

//
//
//
// * Aufgabe 1_6 ******************************************
console.log(
  "%c Aufgabe 1_6 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung:
// Erstelle ein neues Array auf Basis des gegebenen Arrays (siehe Code-Snippet).
// Entferne die Dateiendungen (z.B. "image.jpg" => "image").
// Falls keine Dateiendung vorhanden ist, soll der Wert "invalid" gespeichert werden (z.B. "dog" => "invalid").
// Die Werte sollen in Kleinbuchstaben gespeichert werden.
// Es sollte entweder mit der map() oder forEach() Methode gearbeitet werden.
// Hinweis:
// Als Hilfestellung kannst du hier nochmal map(), if/else und splice() nachlesen.

let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

album = album.map((str) => str.toLowerCase());

function deleteSuffix(str) {
  let index = str.indexOf(".");
  if (index !== -1) {
    return str.substring(0, index);
  } else {
    return "invalid";
  }
}

console.log(album.map(deleteSuffix));
