module.exports = function (io) {
    io.on('connection', (socket) => {
        console.log('a new user has conncted!');

        socket.on('disconnect', function () {
            console.log('user disconnected');
        });

        socket.on('chat message', function (msg) {
            console.log('message: ' + msg);
            io.emit('chat message', msg);
        });
    });
}
