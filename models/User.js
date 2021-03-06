const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new Schema({
    username: {
        type: String,
        required: 'Please enter a name',
        trim: true,
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: 'Please enter a password',
    }
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(mongodbErrorHandler);

let User = module.exports = mongoose.model('User', userSchema);



