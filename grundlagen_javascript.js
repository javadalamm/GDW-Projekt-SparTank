// Aufgabe 1
console.log("Aufgabe 1");
console.log("Ich heiße Tugce Atay.");
console.log(""); // Leerer Absatz

// Aufgabe 2
// Variablen deklarieren
console.log("Aufagbe 2");
const max_sterne = 5;
var aktuelle_anzahl_bewertung = 50;
var gespeicherte_bewertung = 250; // jeder hat 5 Sterne abgegeben

// Ausgabe auf der Konsole
console.log("Dies ist eine Bewertung");
console.log("Maximale Sterne: ", max_sterne);
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
aktuelle_anzahl_bewertung= 51; // + eine neue Bewertung von einer Person
gespeicherte_bewertung= 251; //mit einem Stern bewertet

// Ausgabe der Veränderung auf der Konsole
console.log("Anzahl der aktuellen Bewertungen: ", aktuelle_anzahl_bewertung);
console.log("Sterne insgesamt: ", gespeicherte_bewertung);
console.log("");

/*
// Aufgabe 3
console.log("Aufagbe 3");

function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

prompt('Bitte geben Sie eine Bewertung ein: ', function (input) {
    if (input > max_sterne) {
        // const beachten, max 5 Sterne
        console.log("Achtung maximale Bewertung sind 5 Sterne!");
    }
    else if (isNaN(input) == true) {
        // Fehler wenn ein Non-Integer Wert eingegeben wird.
        console.log(input +"ist keine Zahl!");
    }
    else{
        console.log("Ihre Bewertung lautet: ", input); // Input: Eingabe vom Benutzer wird ausgegeben
    }
    process.exit(); // Prozess wird beendet
});
*/

// Aufgabe 4
// n-MAl berechnen + zufällige Bewertung verwenden.
console.log("");
console.log("Aufgabe 4");

var n;

function random(max_sterne) {
    // Math.floor() rundet jede Zahl auf die nächstniedrigere ganze Zahl ab.
    n = Math.floor(Math.random(max_sterne)*Math.floor(max_sterne)) + 1;
    return n;
}

console.log("Eine zufällige Bewertung: ", random(max_sterne));
console.log("");


/*var fak = 0;
for (i=0; i<=n; i++){
    fak=fak+i;
}

console.log("");
console.log("Die Aktuelle Bewertung: ", aktuelle_anzahl_bewertung);
console.log("Bewertung Gesamt: ", gespeicherte_bewertung);
console.log("Die berechnete Bewertung: ", fak);
console.log("");*/

//Augabe 5
console.log("Aufgabe 5");
var fak = 0;
function berechnung(n) {
  for (i=1; i<=n; i++){
      fak = fak+i;
  }
  return fak;
}

console.log("Die aktuelle Bewertung: ", aktuelle_anzahl_bewertung+1);
console.log("Die Gesamt Bewertung: ", gespeicherte_bewertung+n);
console.log("Die berechnete Bewertung: ", berechnung(n));










