var express = require('express');
var router = express.Router();
router.get('/blog', function(request, response) {
response.render('about');
});
module.exports = router;