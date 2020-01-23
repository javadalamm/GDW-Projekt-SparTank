//Angestllten 

{
    {
        "angestellter";[
            {
                "name": "Sarah Fischer",
                "adress": "Danzigerstr. 12",
                "city": "Bergneustadt",
                "geburtstag": "01.01.1997",
                "Tankstelle": "Markant"
            },
            {
                "name": "Sarah Fischer",
                "adress": "Danzigerstr. 12",
                "city": "Bergneustadt",
                "geburtstag": "01.01.1997",
                "Tankstelle": "Aral"
            },
            {
                "name": "Tom Müller",
                "adress": "Sagerstr. 43",
                "city": "Gummersbach",
                "geburtstag": "14.04.1985",
                "Tankstelle": "Star"
            },
            {
                "name": "Max Mustermann",
                "adress": "Musterstr. 233",
                "city": "Musterstadt",
                "geburtstag": "12.05.1990",
                "Tankstelle": "Markant"
            },
            {
                "name": "Sevda Atay",
                "adress": "Korlenberg 97",
                "city": "Wipperfürth",
                "geburtstag": "5.2.1987",
                "Tankstelle": "Star"
            },
        ]
    }

    // Tankstellen        

    {
        "Tankstelle"; [
            {
                "name": "Aral",
                "city": "Gummersbach",
                "adress": "Kölnerstr. 123"
            },
            {
                "name": "Aral",
                "city": "Bergneustadt",
                "adress": "Königsberger str. 12"
            },
            {
                "name": "Markant",
                "city": "Gummersbach",
                "adress": "Kölnerstr. 123"
            },
            {
                "name": "Markant",
                "city": "Bergneustadt",
                "adress": "Bergstr. 63"
            },
            {
                "name": "Star",
                "city": "Windhagen",
                "adress": "Steil Weg 16",
            },
            {
                "name": "Star",
                "city": "Eckenhagen",
                "adress": "Appelstr. 123"
            },
        ]
    }


    
    var fs = require('fs');

    readFile('Tankstelle.json', function (err, data) {

        var TankstelleObj = JSON.parse(data);

        console.log(TankstelleObj);
    });
};



//Promise bei ASYNCHRONEN NACHRICHTEN
import fs, { readFile } from 'fs';

var p = new Promise(function (resolve, reject) {

    readFile('staedte.json', function (err, data) {
        if (err) reject(err);
        else {
            var staedteObj = JSON.parse(data);
        }
        readFile('mehr_staedte.json', function (err, data) {
            if (err) reject(err);
            else {
                var mehrstaedteObj = JSON.parse(data);
            }
            var allstaedteObj = staedteObj.cities.concat(mehrstaedteObj.cities);
            resolve(allstaedteObj);
        });
    });
});

p.then(function (allstaedteObj) {
    console.log(allstaedteObj);
}).catch(function () {
    console.log("Error");
})