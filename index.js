var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req, res){
    res.render('../view/index');
})

app.get('/contact', function(req, res){
    res.render('../view/contato');
})

app.get('/indexLess', function(req, res){
    res.render('../view/indexLess');
})

app.get('/ex01', function(reg, res){
    res.render('../view/exercicio01');
})

app.listen(3000, function(){
    console.log('ja subiu');    
});     