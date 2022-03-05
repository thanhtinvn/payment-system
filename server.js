var express = require('express');

var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'views');

var server = require('http').Server(app);
var io = require('socket.io')(server);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

server.listen(3000);

app.get('/', function(req, res){
    res.send('ooookkk');
});