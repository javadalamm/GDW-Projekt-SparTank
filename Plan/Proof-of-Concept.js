const https = require('https');


var TankApiKey = "0c45231c6-cc80-9af8-213g-e87df42d3946";
var GooglApiKey = "AIzaSyBA9X-4wsVcV0r3ZAZyK4PVGUtR5kvxAJw";

var lat = "65.9446925";
var lng = "7.945499";
var rad = "1.8";

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

