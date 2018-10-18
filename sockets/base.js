export default function (io) {
    var users = {};
    io.on('connection', (socket) => {
        console.log('a new user has conncted!');
        socket.broadcast.emit('user-connected');

        socket.on('send-username', function (username) {
            socket.username = username;
            users[username] = username;
            io.emit('update-usernames', users)
        });

        socket.on('chat message', function (msgData) {
            socket.broadcast.emit('chat message', msgData);
        });

        socket.on('disconnecting', () => {
            console.log('user disconnected');
            delete users[socket.username];
            io.emit('update-usernames', users)
            io.emit('user-disconnected');
        });

    });
}