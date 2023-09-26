// * Aufgabe 1_8 ******************************************
console.log(
  "%c Aufgabe 1_8 ~~~~~",
  "background: mediumaquamarine; color: black"
);

// Aufgabenstellung:
// Die Methode slice() kennst du ja schon von den Strings, auch hier kann man mit >slice() Werte aus einem Array schneiden und bekommt ein neues Array zurück. Hierbei ist zu beachten, dass slice() einen Startindex benötigt, optional auch einen Endindex.
// Erstelle ein neues Array lieblingsreiseziele, danach schneidest du mit slice() zwei Werte aus dem Array aus und lässt dir das Ergebnis in der Konsole ausgeben.

// Hinweis:
// Lass dir dein Array lieblingsreisziele einmal vor dem slicen in der Konsole ausgeben und einmal danach. Dir wird auffallen, dass das ursprüngliche Array nicht verändert worden ist. Das bedeutet, dass slice() eine Kopie von den Werten erstellt und nicht das Array in sich beeinflusst.
// Schaue dir nochmal die anderen Methoden an und erkenne den Unterschied.

let lieblingsreiseziele = [
  "Schweden",
  "Polen",
  "Italien",
  "Norwegen",
  "Griechenland",
];

console.log(lieblingsreiseziele);
console.log(lieblingsreiseziele.slice(1, 3));
