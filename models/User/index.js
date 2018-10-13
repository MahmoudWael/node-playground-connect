import { validateUsername } from './validate';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        validate: [{ validator: validateUsername, msg: 'Invalid username' }]
    },
}, { timestamps: true });

const user = mongoose.model('User', userSchema);
export default user;