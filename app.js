var express =  require('express');
var path = require('path');
var passport= require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session=require('express-session');
var bodyParser=require("body-parser");
// Init app
const app = express();

//Setting body parser which allows express to read the body of post response
app.use(bodyParser.urlencoded({extended:true}));

//View engine setup
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Passport configuration
app.use(session({
  secret: 'Dblab',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

//Set Routes
var indexRoutes = require('./routes/index.js');





// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});