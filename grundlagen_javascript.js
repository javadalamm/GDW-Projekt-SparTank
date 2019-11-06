// AUFGABENBLATT 1
console.log("Aufgabenblatt 1");
console.log("");

// Aufgabe 1
console.log("Aufgabe 1");
console.log("Ich heiße Tugce Atay.");
console.log(""); // Leerer Absatz

// Aufgabe 2
console.log("Aufagbe 2");

// Variablen deklarieren
const max_sterne = 5; // nur 5 Sterne Bewertung möglich
var aktuelle_anzahl_bewertung = 5; // 50 Personnen haben an der Bewertung teilgenommen
var gespeicherte_bewertung = 25; // jeder hat 5 Sterne abgegeben

// Ausgabe auf der Konsole
console.log("Dies ist eine Bewertung!");
console.log("Maximale Bewertung mit Sternen: ", max_sterne);
console.log("Anzahl der Bewertungen: ", aktuelle_anzahl_bewertung);
console.log("Sterne insgesamt: ", gespeicherte_bewertung);
console.log("");

/* Zusätzliche Bewertung
Zusätzlich  simulieren  Sie  einmal  eine  Bewertung  und  lassen  die  veränderten  Werte  wiederum ausgeben.
Was macht Javascript, wenn Sie eine der Variablen einen anderen Typ zuweisen?
Was passiert,  wenn  Sie  ihrer  Konstante,  nachdem  Sie  diese  deklariert  haben,  einen  neuen  Wert zuweisen?
 -> mit let einen neuen Typ zugewiesen, dadurch kam eine Fehlermeldung. Neuen Typ zuschreiben ist nicht möglich nur die
 überschreibung der zugeschriebenen variablen. */

console.log("Es kommt eine neue Bewertung hinzu. Dadurch Verändern sich die vorherigen Werte");

//Variablen überschreiben
// max_sterne = 6; kann man nicht überschreiben, da es eine Konstante ist
aktuelle_anzahl_bewertung= 6; // + eine neue Bewertung von einer Person
gespeicherte_bewertung= 26; //mit einem Stern bewertet

// Ausgabe der Veränderung auf der Konsole
console.log("Anzahl der aktuellen Bewertungen: ", aktuelle_anzahl_bewertung);
console.log("Sterne insgesamt: ", gespeicherte_bewertung);
console.log("");


// Aufgabe 3
console.log("Aufagbe 3");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Bitte bewerten Sie die App: ", function (answer) {
    if (answer > max_sterne || answer < 0){
        console.log("Fehler! Mindestens 1 und Maximal 5 Sterne Bewertung möglich.");
    }
    else if (isNaN(answer) == true){
        console.log("Fehler! Nur Zahlen von 1 bis 5 sind einzugeben.");
    }
    else{
        console.log("Ihre eingegebene Bewertung: ", answer); // Ausgabe der eingegebenen Bewertung
    }
    rl.close() // beenden

});


// Aufgabe 4
// n-MAl berechnen + zufällige Bewertung verwenden.
console.log("");
console.log("");
console.log("Aufgabe 4");

//var n;
var min = 1;
var max = 5;


function rand(min, max) {
    // Math.floor() rundet jede Zahl auf die nächstniedrigere ganze Zahl ab.
    return n = Math.floor(Math.random() * (max-min +1 )) + min;
}

console.log("Eine zufällige Bewertung: ", rand(min, max));
console.log("");


/*var fak = 1;
for (i=1; i<=n; i++){
    fak=fak*i;
}

console.log("");
console.log("Die aktuelle Anzahl an Bewertung: ", aktuelle_anzahl_bewertung+1);
console.log("Sterne insgesamt: ", gespeicherte_bewertung);
console.log("Die berechnete Bewertung: ", fak);
console.log("");*/

//Augabe 5
console.log("Aufgabe 5");

// Variablen + Berechnung in einer Funktion
var fak = 1;

function berechnung(n) {
  for (i=1; i<=n; i++){
      fak = fak*i;
  }
  return fak;
}

console.log("Die aktuelle Bewertung: ", aktuelle_anzahl_bewertung+1);
console.log("Die Gesamt Bewertung: ", gespeicherte_bewertung+n);
console.log("Die berechnete Bewertung: ", berechnung(n));
console.log("_______________________________________________");
console.log("");

// AUGABENBLATT 2
console.log("Aufgabenblatt 2");
console.log("");

/*
// Aufgabe 1 - Arrays
console.log("Aufgabe 1 - Array");

// Array anlegen
let Array = [name, gespeicherte_bewertung, input];

console.log("Länge des Arrays: ", Array.length);
console.log("Zueletzt eingetragene Bewertung: ", Array[Array.length -1]);
console.log("");


// Aufgabe 2 - Object
console.log("Aufgabe 2 - Object");

var ergebnis = parseInt(gespeicherte_bewertung)+parseInt(input);
var akt_Bewertung = aktuelle_anzahl_bewertung+1;

let ratings = new Object();
ratings.name="def";
ratings.letzteBewertung = ergebnis;
ratings.aktuelleBewertung = akt_Bewertung;
ratings.durchschnitt = function () {
    return this.letzteBewertung/this.aktuelleBewertung;
};*/















