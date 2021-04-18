var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var dotenv = require('dotenv');
var ejs = require('ejs');
var fileUpload = require('express-fileUpload');

dotenv.config();

var app = express();

app.use(fileUpload());

app.use(express.static(__dirname + '/public'));

var login = require('./routes/login');
var SignUp = require('./routes/SignUp');
var blog = require('./routes/blog');
var content = require('./routes/content');
var image = require('./routes/image');
var admin = require('./routes/admin');
var register = require('./routes/register');
var edit = require('./routes/edit');
var deleteUser = require('./routes/delete-user');
var about = require('./routes/about');
var post = require('./routes/post');
var home = require('./routes/home');
var newPost = require('./routes/newPost');





app.set('view engine', 'ejs')

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/signUp', function(request, response) {
	response.sendFile(path.join(__dirname + '/register.html'));
});

 
app.set('views', path.join(__dirname, "view"));
app.use('/', login);    
app.use('/', SignUp);  
app.use('/', blog);  
app.use('/', content);  
app.use('/', image); 
app.use('/', admin); 
app.use('/', register); 
app.use('/', edit); 
app.use('/', deleteUser); 
app.use('/', about); 
app.use('/', post); 
app.use('/', home); 
app.use('/', newPost); 

 

app.get('/admin', function(request, response) {
	if (request.session.loggedin) {
		response.redirect('/')
	} else {
		response.send('Please login to view this page!');
	}
	response.end();
});

app.listen(process.env.SERVER_PORT);