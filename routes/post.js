const express = require('express');
const routes = express.Router();
const postControl = require('../controllers/postControl');
const post = require('../models/post');

routes.get('/viewPost', postControl.viewPost);

routes.post('/postFormData', post.uploadImg, postControl.postFormData);

routes.get("/viewBlog", postControl.viewBlog);

routes.get('/deleteBlog/:id', postControl.deleteBlog);

// routes.get('/updateBlog/:id', postControl.updateRecord);

module.exports = routes;