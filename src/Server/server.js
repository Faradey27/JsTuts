var express = require('express'),
    app = express();

var DataBaseUtils = require('./DataBaseUtils.js');
var dataBaseUtils = new DataBaseUtils();
var bodyParser = require('body-parser');

app.use(function(err, req, res, next){
  res.send(500, 'Something broke!');
});
app.use(bodyParser());
app.use(express.static(__dirname +'/../../'+ '/public'));
app.use('/index', express.static(__dirname +'/../../'+ '/public'));

app.post('/register', function(req, res) {
    dataBaseUtils.addNewUser(req.body).then(function(d){
        console.log('succes user adding');
    });
    res.send(req.body)
});

app.listen(8080, function() { console.log("Server is up and running");  });