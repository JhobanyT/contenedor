var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send("Bienvenido a node!.....")
});

app.listen(9090, function(){
    console.log('Escuchando en el puerto 9090');
});