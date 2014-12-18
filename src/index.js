var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  if(req.query.name==undefined){
    res.send('Quem é você? Coloque o seu nome na url usando <b>?name=[seu_nome]</b>\n');
  }else{
    res.send('Hello World '+req.query.name+'\n');
  }
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);