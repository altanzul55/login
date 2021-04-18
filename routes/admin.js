var express = require('express');
var router = express.Router();
var path = require('path');
var connection = require('../connection/connection');

router.get('/admin', function(request, response) {
if (request.session.loggedin) {
connection.query('SELECT * FROM accounts', function (error, results, fields) {
response.render("admin", {users: results});
});
}else{
response.render("SignUp", {error: "Please sign up"});
}

});
module.exports = router;