// * Aufgabe 1_1 ******************************************
console.log(
  "%c Aufgabe 1_1 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung:
// In dieser Übung geht es darum, Arrays alphabetisch zu sortieren.
// Sortiere die Programmiersprachen alphabetisch.
// Der Code für das Array steht im Code-Snippet.
// Deklariere die Funktion sortierung.
// Verwende den Befehl sort(), um die Aufgabe zu erfüllen.
// Rufe die Funktion sortierung auf.
// Überprüfe den Erfolg in der Konsole.

let languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

function sortierung() {
  languages.sort();
  console.log(languages);
}
sortierung();

//
//
//
// * Aufgabe 1_2 ******************************************
console.log(
  "%c Aufgabe 1_2 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung:
// In dieser Übung geht es darum, Arrays nicht alphabetisch von A-Z, sondern von Z-A zu sortieren.
// Sortiere die Programmiersprachen in umgekehrter alphabetischer Reihenfolge.
// Der Code steht im Code-Snippet.
// Deklariere die Funktion sortierung2.
// Verwende den Befehl sort() und reverse(), um die Aufgabe auszuführen.
// Rufe die Funktion sortierung2 auf.
// Überprüfe das Ergebnis in der Konsole.

languages = [
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "PHP",
  "C++",
  "CSS",
  "C#",
  "Go",
  "C",
  "TypeScript",
  "Swift",
];

function sortierung2() {
  languages.sort().reverse();
  console.log(languages);
}
sortierung2();

//
//
//
// * Aufgabe 1_3 ******************************************
console.log(
  "%c Aufgabe 1_3 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung:
// In dieser Übung lernst du, wie man die Nummern 0-99 aufsteigend sortiert.
// Sortiere die Nummern aufsteigend.
// Der Code steht im Code-Snippet.
// Verwende den Befehl sort() und Google, um die Aufgabe korrekt auszuführen.
// Überprüfe das Ergebnis in der Konsole.

let numArray1 = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

numArray1.sort((a, b) => a - b);
console.log(numArray1);

//
//
//
// * Aufgabe 2_2 ******************************************
console.log(
  "%c Aufgabe 2_2 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung
// In dieser Übung lernst du, wie man die Nummern 0-∞ aufsteigend sortiert.
// Sortiere die Nummern aufsteigend.
// Der Code steht im Code-Snippet.
// Verwende den Befehl sort() und Google, um die Aufgabe korrekt auszuführen.
// Überprüfe das Ergebnis in der Konsole.

let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

numArray2.sort((a, b) => a - b);
console.log(numArray2);
