var express = require('express');
var router = express.Router();
var connection = require ('../connection/connection');
var path = require('path');
const { route } = require('./admin');
const { request, response } = require('express');

router.get('/register', function(request, response) {
response.render('user/register');
});

router.post('/register', function (request , response) {
var username = request.body.username;
var password = request.body.password;
var email = request.body.email;
var photo = request.files.profilePhoto;
var fileName = photo.name;


if (username && password && email ) {
connection.query('INSERT INTO `accounts` (`username`, `password`, `email`, `profilePicture` ) VALUES(? , ? , ?, ?)',
[username,password, email, fileName] , function (error , results, fields) {
if (!error) {
photo.mv('./public/images/avatars/'+ fileName);
request.session.loggedin = true;
response.redirect ('/admin');
}else {
console.log(error);
}
}
)};
});

module.exports = router;