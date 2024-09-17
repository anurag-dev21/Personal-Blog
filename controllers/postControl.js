const post = require('../models/post');
const path = require('path');
const fs = require('fs');
const { log } = require('console');

module.exports.viewPost = async (req, res) => {
    return res.render('userpanal/post/postAdd');
};

module.exports.postFormData = async (req, res) => {
    var ImagePath = '';
    if (req.file) {
        ImagePath = post.postModulePath + "/" + req.file.filename;
    }
    req.body.postImg = ImagePath;
    let data = await post.create(req.body);
    return res.redirect('/admin/dashboard');
};

module.exports.viewBlog = async (req, res) => {
    let search = '';
    if (req.query.search) {
        search = req.query.search;
    }

    if (req.query.page) {
        page = req.query.page;
    }
    else {
        page = 0;
    }

    let perPage = 2;

    let data = await post.find({
        $or: [
            { name: new RegExp(search, 'i') },
        ]
    }).limit(perPage).skip(perPage * page);

    let totalDocument = await post.find({
        $or: [
            { name: new RegExp(search, 'i') },
        ]
    }).countDocuments();

    return res.render('view_blog', {
        stData: data,
        search: search,
        totalDocument: Math.ceil(totalDocument / perPage),
        currentPage: page,
    });
};


module.exports.deleteBlog = async (req, res) => {
    console.log('hiii');
    
    // let oldImg = await post.findById(req.params.id);
    // if (oldImg.adminImg) {
    //     let fullPath = path.join(__dirname, "..", oldImg.postImg);
    //     await fs.unlinkSync(fullPath);
    // }
    // await admin.findByIdAndDelete(req.params.id);
    // return res.redirect('back');
};
