var express = require('express');
var router = express.Router();
var connection = require('../connection/connection');
router.get('/SignUp', function(request, response) {
response.render('SignUp');
});
router.post('/SignUp', function(request, response) {
var username = request.body.username;
var password = request.body.password;
var email = request.body.email;
if (username && password && email) {
connection.query('Insert into accounts (username,password,email) values(?, ?, ?)', [username, password,email], function(error, results, fields) {
if(error){
response.send("failed");
}else
response.redirect('/');
response.end();
}
);
}
})

module.exports = router;