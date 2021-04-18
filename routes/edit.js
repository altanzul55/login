var express = require('express');
var router = express.Router();
var connection = require ('../connection/connection');
var path = require('path');




router.get('/edit/:id', function(request, response) {
var id = request.params.id;
connection.query('SELECT * FROM accounts WHERE id = ?', [id],
function (error, results, fields) {
if (!error) {
response.render("user/edit", {user:results[0]});
}else {
console.log(error);
}
});
});



router.post('/edit/:id', function(request, response) {
var username = request.body.username;
var password = request.body.password;
var email = request.body.email;
var id = request.params.id;
connection.query('UPDATE accounts SET username=? , password=?, email=? WHERE id = ?', [username, password, email,id],
function (error, results, fields) {
if (!error) {
response.redirect("/admin");
}else {
console.log(error);
}
});
});




router.get('/editPost/:id', function(request, response) {
    var id = request.params.id;
    connection.query('SELECT * FROM blogPost WHERE id = ?', [id],
    function (error, results, fields) {
    if (!error) {
    response.render("user/editPost", {blog:results[0]});
    }else {
    console.log(error);
    }
    });
    });
    
    
    router.post('/editPost/:id', function(request, response) {
    var title = request.body.title;
    var content = request.body.content;
    var photo = request.files.phts;
    var fileName = photo.name;
    var id = request.params.id;
    connection.query('UPDATE blogPost SET title=? , description=?, blogPhoto=? WHERE id = ?',
    [title, content, fileName,id],
    function (error, results, fields) {
    if (!error) {
    photo.mv('./public/images/newsPhoto/'+ fileName);
    response.redirect("/post");
    }else {
    console.log(error);
    }
    });
    });
    
    
    
    module.exports = router;



// router.post('/editPost/:id', function(request, response) {
//     var id = request.params.id;
//     var title = request.body.title;
// var description = request.body.description;
// if(request.files!==null){
//     var photo = request.files.photo;
// var fileName = photo.name;
// }  else {
//     var fileName = request.body.image1
// }
// connection.query('UPDATE blogPost SET title = ?, description = ?, blogPhoto = ? WHERE id = ?', [title, description, blogPhoto, id], function (error, result, fields) {
//     if (!error) {
//         response.redirect('/post');
//     } else {
//         console.log(error);
//     }
// })
// // connection.query('UPDATE blogPost SET title=? , description=?, blogPhoto=? WHERE id = ?',
// // [title, description, fileName,id],
// // function (error, results, fields) {
// // if (!error) {
// // response.redirect("/post");
// // }else {
// // console.log(error);
// // }
// // });
// });
