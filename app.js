var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students');
var productsRouter = require('./routes/products');

var menusRouter = require('./routes/menuroutes');
var submenusRouter = require('./routes/submenuroutes');
var categoriesRouter = require('./routes/categoriesroutes');
var subcategoriesRouter = require('./routes/subcategoriesroutes');





var app = express();

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://ravitupkar03:rv8983411542@cluster0ravi-flkid.mongodb.net/newcomm?retryWrites=true&w=majority', {
   useNewUrlParser: true, useUnifiedTopology: true 
}).then(() => {
      // console.log('Database sucessfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
   next();
 });
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', studentsRouter);
app.use('/admin/products', productsRouter);

app.use('/menus', menusRouter);
app.use('/submenus', submenusRouter);
app.use('/categories', categoriesRouter);
app.use('/subcategories', subcategoriesRouter);
app.use('/products', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
