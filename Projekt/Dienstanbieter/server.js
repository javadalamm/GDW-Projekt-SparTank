const express = require ('express'); 

var app = express();

global.data = require('./res/data');

const settings = {
    port: process.env.PORT || 3000
};

const price = require ('./res/price');
app.use("/price", price); 

const distanz = require('./res/distanz');
app.use("/distanz",distanz);

const detail = require('./res/detail');
app.use("/detail",detail);

// Server Starten 

app.listen(settings.port, function(){
    console.log("REST-Server Port " + settings.port);
});