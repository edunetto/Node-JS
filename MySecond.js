var express = require('express'); // I can use ExpressJS to format texts written with HTML
var csv = require('csv');

var app = express();

app.listen(8080, rodandoServidor);

app.get("/", function(req,res, next){
  res.json({
      ok: "Tudo funciona"
  });

});

app.get("/teste", function(req,res, next){
  res.send('<p>TEste</p>Teste');


});

function rodandoServidor() {
  console.log("Express server running....");
}
