const https = require('https');


var TankApiKey = "";
var GooglApiKey = "";

var lat = "";
var lng = "";
var rad = "";

var dlat,dlang;

var url = "";
const request = require ('request');

request (url ,{json:true},(err , res , body) =>{
    if (err) {return console.log(err);}
    console.log(body);
    dlat = body.station[0].lat;
    dlang = body.station[0].lng;
    var gurl="";
    request(gurl,{json: treu} , (err , res, body) =>{
        if (err) {return console.log(err); }
        var result = JSON.stringify(body);
        console.log(result);
    });
});

