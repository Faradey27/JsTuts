
var mongoose = require('mongoose');// load mongo
var bcrypt   = require('bcrypt-nodejs');// load module for encrypt data

// define the schema for our user model
var userSchema = mongoose.Schema({

    user: {
        courses: [String],

        local            : {
            email        : String,
            password     : String,
        },
    },

    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.user.local.password);
};

// create the model for users and expose it
module.exports = mongoose.model('User', userSchema);
