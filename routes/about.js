var express = require('express');
var router = express.Router();
var path = require('path');
var connection = require('../connection/connection');

router.get('/about', function(request, response) {
connection.query('SELECT * FROM accounts', function (err, res, field){
if (!err){
response.render("about", {users: res});
}
else{
console.log(err);
}
});


});
module.exports = router;