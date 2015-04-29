Router.route('/', function () {
		this.layout('landingPage');
	  this.render('spaceChase');
});

// this route will probably change to just '/' at 1.0
Router.route('/home', function () {
		this.layout('homeLayout');
	  this.render('homeContent');
});


Router.route('/contact', function () {
		this.layout('homeLayout');
	  this.render('contactForm');
});


Router.route('/about', function () {
		this.layout('homeLayout');
	  this.render('masterTheme');
});