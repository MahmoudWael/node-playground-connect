import {
    validateUsername
} from './validate';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: false,
        validate: [{
            validator: validateUsername,
            msg: 'Invalid username'
        }]
    },
    email: {
        type: String,
        unique: true,
    }
}, {
    timestamps: true
});

const user = mongoose.model('User', userSchema);


export default user;