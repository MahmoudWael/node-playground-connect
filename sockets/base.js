module.exports = function (io) {
    io.on('connection', (socket) => {
        console.log('a new user has conncted!');
        socket.emit('user-connected');
    });
    io.on('disconnect', function (socket) {
        console.log('user disconnected');
        socket.emit('user-disconnected');
    });

    io.on('chat message', function (socket) {
        console.log('message: ' + msg);
        socket.emit('chat message', msg);
    });
}
