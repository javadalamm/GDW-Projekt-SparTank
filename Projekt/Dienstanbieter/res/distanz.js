  
const express = require("express");
const router = express.Router();

const ressourceName = "distanz";


var tankeapikey = "";
var googlapikey = "";

//Middleware
router.get('/:lat,:lng', function (req, res) {
    var lat = req.params.lat;
    var lng = req.params.lng;
    var url = "";


    const request = require('request');

    request(url, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); }
        dlat = body.stations[0].lat;
        dlng = body.stations[0].lng;
        var gurl = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + lat + "," + lng + "&destinations=" + dlat + "," + dlng + "&key=" + googlapikey;
        request(gurl, { json: true }, (err, res3, body) => {
            if (err) { return console.log(err); }
            var result = JSON.stringify(body);
            res.send("Die Tankstelle ist " + body.rows[0].elements[0].distance.text + "km entfernt." + result);

        });
    });
});

module.exports = router;