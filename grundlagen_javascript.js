// AUFGABENBLATT 1
console.log("AUFGABENBLATT 1");
console.log("");
console.log("");


console.log("Aufgabe 1");

console.log("Mein Name ist Tugce Atay"); //Ausgabe meines Namens auf der Konsole
console.log("");


console.log("Aufgabe 2");

//maximale Höhe der möglichen Bewertung
const max_höhe= 5;

// insgesamt 100 Personen bewertet
var aktuelle_anzahl=100;

// jeder hat mit 5 STernen bewertet
var aktuelle_bewertung= 500;

console.log("Dies ist eine Bewertung!");
console.log("Maximale Bewertung:",max_höhe);
console.log("Es haben insgesamt bewertet:",aktuelle_anzahl);
console.log("Die aktuelle Bewertung beträgt:",aktuelle_bewertung);
console.log("");

/*
//Variablen einen anderen Typ zuweisen
let aktuelle_anzahl= 101; //eine simulierte Bewertung
let aktuelle_bewertung= 503; //nächste Bewertung mit 3 Sternen
 */

console.log("Eine neue Bewertung ist eingegangen!");
console.log("Die Werte werden aktualisiert");
console.log("...");

aktuelle_anzahl=101; // 1 neue Person hat bewertet
aktuelle_bewertung=503;// eine neue Bewertung addiert

console.log("Neue insgesamte Bewertung:",aktuelle_anzahl);
console.log("Neue aktuelle Bewertung beträgt:",aktuelle_bewertung);
console.log("");

/*
Der Konstante einen neuen Wert zuweisen, nach deklaration

var max_höhe=10; //der Konstante einen neuen Wert zugewiesen

FRAGE: was passiert, wenn man einer Kostante einen neue Wert gibt ?

ANTWORT: eine Kostante deklariert eine unveränderliche Variable -> also passiert da garnichts

FRAGE: was passiert, wenn man eine Variable einen neue Wert gibt ?
ANTWORT: var deklariert eine Variable unabhängig von ihrem Scope
         let delklariert eine lokale Variable im Block Scope
         somit geht es, kann sich der Wert ändern
*/


// von der Konsole einlesen
console.log("Aufgabe 3");

const readline = require('readline');
const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
});

rl.question("Bitte bewerten Sie die App: ",function(answer) {

    ('Ihre Bewertung: ', function(answer) {
        if(answer > max_höhe ||answer < 0) { //Konstante beachten const=5
            console.log("Achtung! Die maximale Bewertung sind 5 Sterne!");
        }
        else if(isNaN(answer)==true) { //Fehlermeldung wenn das ein non integerwert ist
            console.log(input + "Dies ist keine Zahl,bitte geben Sie eine Zahl von 1 bis 5 ein!");
        }
        else {
            console.log(answer); // Input : Eingabe = Eingabe vom Nutzer
        }
        rl.close(); //Prozess wird beendet

    });

// Kien Übergang
// zufällige Bewertungen der Nutzer soll keins mehr eingeben !
    console.log("");


// Fakultät
    console.log("Aufgabe 4");

    var n;

    function random(max_höhe) {
//Math.floor()- rundet jede Zahl auf die nächst niedrigere ganze Zahl ab
        n= Math.floor(Math.random(max_höhe)*Math.floor(max_höhe)) + 1; //Math.random() liefert....
        return n;

    }
    console.log("Eine zufällige Bewertung: ",random(max_höhe));

    /*
    var fak = 1;
    for(i=1; i<=n; i++) {
    fak= fak+i;
    }
    console.log("");
    console.log("Die aktuelle Bewertung:",aktuelle_anzahl + 1);
    console.log("Die gesamt Bewertungen",aktuelle_bewertung + n);
    //Fakultät n!
    console.log("Die berechnete Bewertung:",fak);
    */

    console.log("");


    console.log("Aufgabe 5");

    var fak = 1;
    function berechnung(n) {

        for (i=1; i<=n; i++) {
            fak= fak*i;
        }
        return fak;
    }

    console.log("Die aktuelle Bewertungen: ",aktuelle_anzahl + 1);
    console.log("Die gesamt Bewertungen: ", aktuelle_bewertung + n);
    console.log("Die berechnete Bewertung: ", berechnung(n));
    console.log("");
    console.log("________________________________________________");

//Aufgabenblatt 2

    console.log("");
    console.log("AUFGABENBLATT 2");
    console.log("");
    console.log("");

    console.log("Aufgabe 1 - Array");
    // Array mit Name der Bewertung, anzahl abgegebener Bewertung, zuletzt eingetragene bewertung
    let array = ['AppBewertung',aktuelle_anzahl,answer];

    // Länge der Bewertung ausgeben
    console.log("Die Länge des Arrays: ", array.length);

    // Letzte Bewertung ausgeben
    console.log("Der zuletzt eingetragene Bewertung: ",array[array.length-1]);
    console.log("");


    console.log("Aufgabe 2 - Object");

    let ratings = new Object();
    ratings.name ="AppBewertung";
    ratings.letzte_bewertung = aktuelle_bewertung;
    ratings.aktuelle_Bew = aktuelle_anzahl;

    ratings.durchschnitt = function() {
        return this.letzte_bewertung/this.aktuelle_Bew;  //Berechnung und Ausgabe der Bewertung
    };

    console.log("Der Name der Bewertung: ",ratings.name);
    console.log("Durchschnitt: ",ratings.durchschnitt());
    console.log("");


    console.log("Aufgabe 4 - Arrow");

    const arrow = () => (aktuelle_bewertung/aktuelle_anzahl);                                    // arrow function

    // short
    console.log("Arrow: ", arrow());
    console.log("");


    console.log("Aufgabe 5 - Scope");

    const hello = "hello";

    function scope1 () {
        const world = "World";
        let nameone = world.concat(hello); // Methode String.concat() = world mit hello konkateniert = Worldhello

        console.log("Konkatenieren: " ,nameone);
    }
    scope1();

    function scope2 () {
        const world = "World";
        let nametwo = hello.concat(world); // Richtige Reigenfolge =hello mit world konkateniert => helloWorld

        console.log("Konkatenieren: ",nametwo);
    }
    scope2();

});














