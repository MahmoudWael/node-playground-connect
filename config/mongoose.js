var mongoose = require('mongoose');

module.exports = function (config) {
    mongoose.set('useCreateIndex', true)
    mongoose.connect(config.db, { useNewUrlParser: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('test db opened');
    });
}