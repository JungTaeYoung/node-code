const multer = require('multer')
const path  = require('path')
const fs = require('fs')
var MAGIC_NUMBERS = {
    jpg: 'ffd8ffe0',
    jpg1: 'ffd8ffe1',
    png: '89504e47',
    gif: '47494638'
}

function checkMagicNumbers(magic) {
    if (magic == MAGIC_NUMBERS.jpg || magic == MAGIC_NUMBERS.jpg1 || magic == MAGIC_NUMBERS.png || magic == MAGIC_NUMBERS.gif) return true
}

var storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, './uploads')
    },
    filename: function(req, file, callback){
        console.log(file)
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var uploadGet = function(req, res){
    res.render('home')
}

var uploadPost = function(req, res){
    var upload = multer({
        storage: multer.memoryStorage(),
        fileFilter: function(req, file,callback){
            var ext = path.extname(file.originalname)
            if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg'){
                return callback(res.end('Only images are allowed'), null)
            }
            callback(null, true)
        }
    }).single('userFile')

    upload(req, res, function(err){
        if(req.file == null || req.file == undefined) {
            res.end('파일을올리고해주세요')
        } else {
            var buffer = req.file.buffer
            
            var magic = buffer.toString('hex', 0, 4)
            var filename = req.file.fieldname + '-' + Date.now() + path.extname(req.file.originalname)
            if(checkMagicNumbers(magic)) {
                fs.writeFile('./uploads/' + filename, buffer, 'binary', function(err){
                    if(err) throw err
                        res.end('file is uploaded')
                })
            } else{
                res.end('File is no valid')
            }
        }
    })
}

module.exports = {
    uploadPost: uploadPost,
    uploadGet: uploadGet
};