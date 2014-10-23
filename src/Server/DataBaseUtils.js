var databaseUrl = "usersProfiles";
var collections = ["users", "reports"];
var Q = require('q');
var db = require("mongojs").connect(databaseUrl, collections);

function DataBaseUtils() {}

DataBaseUtils.prototype =  {

    addNewUser: function(userDate) {
        var deferred = Q.defer();
        db.users.save({
            email: userDate.email,
            password: userDate.password
        },
        function(err, saved) {
            if( err || !saved ) {
                deferred.reject(new Error(err));
            }
            else {
                deferred.resolve(saved);
            }
        });
        return deferred.promise;
    },

    getAllUsers: function() {
        var deferred = Q.defer();
        db.users.find({}, function(err, data){
            deferred.resolve(data);
        });
        return deferred.promise;
    },
}

module.exports = DataBaseUtils;