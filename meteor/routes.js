Router.route('/', function () {
  this.render('Home', {
  });
});

Router.route('/need', function () {
  this.render('The Need', {
  });
});

Router.route('/solution', function () {
  this.render('The Solution', {
  });
});

Router.route('/about', function () {
  this.render('About', {
  });
});

Router.route('/donate', function () {
  this.render('Donate', {
  });
});
