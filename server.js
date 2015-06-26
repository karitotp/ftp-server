var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, '')));
app.get('/', function (req,res){
	res.render("index");
});
app.listen(3024);
console.log('servidor corriendo');