var Database = require('./DataBaseUtils');
var database = new Database("mongodb://localhost:27017/myproject", "db");

function startServer(db) {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    // The rest of the setup is excluded for brevity...

    console.log('Connected to the database');

    app.locals.database = database;
    routes.registerRoutes(app);

    http.createServer(app).listen(app.get('port'), function onServerListen(){
        console.log('Express server listening on port ' + app.get('port'));
    });
};

database.connect(['Posts', 'Stats', 'Log'])
   .then(startServer);