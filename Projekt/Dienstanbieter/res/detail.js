const express = require("express");
const router = express.Router();

const ressourceName = "detail";


var tankeapikey = "";
var googlapikey = "";



router.get('/:id,:lat,:lng', function (req, res) {
    var id = req.params.id;
    var lat = req.params.lat;
    var lng = req.params.lng;
    var rad = req.params.rad ;
    var url = "";


    const request = require('request');

    request(url, { json: true }, (err, res2, body) => {
        if (err) { return console.log(err); }
        dlat = body.station.lat;
        dlng = body.station.lng;
        var gurl = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + lat + "," + lng + "&destinations=" + dlat + "," + dlng + "&key=" + googlapikey;
        request(gurl, { json: true }, (err, res3, body2) => {
            if (err) { return console.log(err); }
            var result = JSON.stringify(body.station);
            res.send(result + "{Entfernung: " + body2.rows[0].elements[0].distance.text + "};");

        });
    });
});


module.exports = router;