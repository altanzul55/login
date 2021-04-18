var express = require('express');
var router = express.Router();
router.get('/image', function(request, response) {
response.render('image');
});
module.exports = router;