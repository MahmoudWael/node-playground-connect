export default function (io) {
    var users = {};
    var socker_Ids = {}
    io.on('connection', (socket) => {
        console.log('a new user has conncted!');
        socket.on('send-username', function (username) {
            socket.username = username;
            users[username] = username;
            socker_Ids[username] = socket;
            socket.broadcast.emit('user-connected', username);
            io.emit('update-usernames', users)
        });

        socket.on('chat message', function (msgData) {
            socket.broadcast.emit('chat message', msgData);
        });

        socket.on('private-message', function(msgData, privateUserName){
            socker_Ids[privateUserName].emit('private-message', msgData)
        })

        socket.on('user-typing', (isTyping) => {
            socket.broadcast.emit('notify-typing', socket.username, isTyping)
        })
        socket.on('disconnecting', () => {
            console.log('user disconnected');
            delete users[socket.username];
            io.emit('update-usernames', users)
            io.emit('user-disconnected', socket.username);
        });

    });
}