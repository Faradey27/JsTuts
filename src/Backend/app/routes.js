module.exports = function(app, passport) {

    var db = require('./DataBaseUtils.js');
    var dbUtils = new db();

	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.ejs', {
			user : req.user
		});
	});

    app.get('/isLogin', function(req, res) {
        res.send(req.isAuthenticated());
    });

    app.post('/isLogin', function(req, res) {
        var sendData = {
            isLogin: req.isAuthenticated(),
            user: req.user
        }
        res.send(sendData);
    });

    app.post('/subscribeCourse', function(req, res) {
        dbUtils.addCourseForUserByEmail(req.user.user.local.email, req.body);
        res.send(req.body);
    });


	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

    app.post('/login', passport.authenticate('local-login'), function(req, res){
        res.send(req.body);
    });

    app.post('/signup', passport.authenticate('local-signup'), function(req, res){
        res.send(req.body);
    });

    app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect : '/profile',
            failureRedirect : '/'
    }));

    app.get('/auth/twitter', passport.authenticate('twitter', { scope : 'email' }));

    app.get('/auth/twitter/callback',
        passport.authenticate('twitter', {
            successRedirect : '/profile',
            failureRedirect : '/'
    }));

    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : '/profile',
            failureRedirect : '/'
    }));

	app.get('/connect/local', function(req, res) {
		res.render('connect-local.ejs', { message: req.flash('loginMessage') });
	});

	app.post('/connect/local', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/connect/local', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

	app.get('/connect/facebook/callback',
		passport.authorize('facebook', {
			successRedirect : '/profile',
			failureRedirect : '/'
	}));

	app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

	app.get('/connect/twitter/callback',
		passport.authorize('twitter', {
			successRedirect : '/profile',
			failureRedirect : '/'
	}));

	app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

	app.get('/connect/google/callback',
		passport.authorize('google', {
			successRedirect : '/profile',
			failureRedirect : '/'
	}));

	app.get('/unlink/local', isLoggedIn, function(req, res) {
		var user            = req.user;
		user.local.email    = undefined;
		user.local.password = undefined;
		user.save(function(err) {
			res.redirect('/profile');
		});
	});

	app.get('/unlink/facebook', isLoggedIn, function(req, res) {
		var user            = req.user;
		user.facebook.token = undefined;
		user.save(function(err) {
			res.redirect('/profile');
		});
	});

	app.get('/unlink/twitter', isLoggedIn, function(req, res) {
		var user           = req.user;
		user.twitter.token = undefined;
		user.save(function(err) {
			res.redirect('/profile');
		});
	});

	app.get('/unlink/google', isLoggedIn, function(req, res) {
		var user          = req.user;
		user.google.token = undefined;
		user.save(function(err) {
			res.redirect('/profile');
		});
	});

};

function isLoggedIn(req, res, next) {

	if (req.isAuthenticated())
		return next();

	res.redirect('/');
}
