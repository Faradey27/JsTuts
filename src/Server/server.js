var express = require('express'),
    app = express();

var Router = require('./router.js');
var DataBaseUtils = require('./DataBaseUtils.js');
var dataBaseUtils = new DataBaseUtils();

var user = {
    email: "111@",
    password: "vasa"
}

function callback () {
    console.log('done')
}

dataBaseUtils.addNewUser(user, callback).then(function() {
    dataBaseUtils.getAllUsers().then(function(data){
        console.log(data)
    })
});




app.use(express.static(__dirname +'/../../'+ '/public'));
app.use('/index', express.static(__dirname +'/../../'+ '/public'));

app.listen(8080);