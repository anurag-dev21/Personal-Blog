const mongoose = require('mongoose');
const multer = require('multer');
const imgPath = ('/uploads');
const path = require('path');
const postSheMa = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    postImg: {
        type: String,
        require: true
    }

});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "..", imgPath));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now());
    }
})
postSheMa.statics.uploadImg = multer({
    storage: storage,
}).single("post");
postSheMa.statics.postModulePath = imgPath;
const post = mongoose.model('post', postSheMa);
module.exports = post;