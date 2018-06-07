/**
 * LOVE_BOOK project
 * xodud3141@nate.com
 * JTY_code
 */
const express = require('express')
const app = express()
const path = require('path')
const multer = require('multer')
const fs = require('fs')
const ejs = require('ejs')
const api = require('./routes/api/index.js')
const users = require('./routes/users/index.js')
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

var i;
for(i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    },100)
}

for (var i = 1; i <= 5; i++) {
    setTimeout(function(x) { return function() { console.log(x); }; }(i), 100);
}

app.use('/api', api)
app.use('/users', users)
app.use('/api', express.static('public'))
app.use('/users', express.static('public'))
/* SERVER OPEN! */
var port = process.env.PORT || 3030
app.listen(port, '192.168.0.81', function(){
    console.log('server open!' + port)
    
})
var f = function g(){
     return 23; 
    };
console.log(typeof f.g);

if([]==0){
    console.log('true')
} else {
    console.log('false')
}
module.exports = app;