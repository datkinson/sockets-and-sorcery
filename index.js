var express = require("express");
var app = express();
var port = 3700;

app.set('views', __dirname + '/views');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function(req, res){
    res.render("home");
});


// Dynamic content page
app.get("/screen", function(req, res){
    var address = "/";
    res.render('dynamic', { srcStr: address });
});
app.get("/screen-control", function(req, res){
    res.render('controls');
});

// rpg phaser application
app.get("/map", function(req, res){
    res.render('rpg');
});

// chat
app.get("/chat", function(req, res){
    res.render('chat');
});


app.use(express.static(__dirname + '/public'));

var io = require('socket.io').listen(app.listen(port));


io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});


console.log("Listening on port " + port);
