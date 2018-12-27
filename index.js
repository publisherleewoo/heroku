var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
const PORT = process.env.PORT
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    io.on('connection', function (socket) {
        console.log('a user connected');
    });

    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});

io.emit('some event', { for: 'everyone' });


http.listen(PORT, function () {
    console.log('listening on *:PORT');
});
