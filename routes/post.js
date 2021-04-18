var express = require('express');
var router = express.Router();
var path = require('path');
var connection = require('../connection/connection');

router.get('/post', function(request, response) {
if (request.session.loggedin) {
connection.query('SELECT * FROM blogPost', function (error, results, fields) {
console.log(results);
response.render("post", {blog:results});
});
}else{
response.render("SignUp", {error: "Please sign up"});
}
});
module.exports = router;