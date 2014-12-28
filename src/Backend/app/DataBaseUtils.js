
var User       = require('../app/models/user');
var Q = require("q");

function DataBaseUtils() {}

DataBaseUtils.prototype = {

    addCourseForUserByEmail: function(email, course) {
        var deferred = Q.defer();

        User.findOne({ 'user.local.email' :  email }, function(err, user) {

            if (err) {

            } else {

                for (var i = 0; i < user.user.courses.length; i++) {
                    if (user.user.courses[i] == course.name) {
                        return err;
                    }
                }

                user.user.courses.push(course.name);

                user.save(function (err) {
                    if (err) return console.log(err);
                    console.log(user)
                });
            }
        });


        return deferred.promise;
    }

}


module.exports = DataBaseUtils;
