const express = require("express");
const router = express.Router();

const resourceName = "price"; 



var TankApiKey = "";
var GooglApiKey = "";

router.get('/:id,:lat,:lng') , function (req , res){
    var id = req.params.id;
    var lat = req.params.lat; 
    var lng = req.params.lng;
    var url = "";
    var urlp = "";

    const request = require ('request');

    request (url , {json:true},(err , res2 ,body1) =>{
        if (err) {return console.log(err);}
        dlat = body1.station.lat;
        dlng = body1.station.lng;

        var station = JSON.stringify(body1.station);
        var gurl = "";
       
        request (gurl, {json:true},(err , res3,body2) =>{
            if (err){return console.log(err);}
            var googlemaps = JSON.stringify(body2);
        
        request (urlp , {json:true},(err, res4 , body3) =>{
            if (err) {return console.log(err);}
            var prices = JSON.stringify(body3.prices);
            res.send(station + "{Entfern:" + body2.rows[0].elements[0].distanz.text + prices + "};");
        });

        });
    });    
}
module.exports = router; 