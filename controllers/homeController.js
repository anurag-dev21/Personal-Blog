const express = require('express');
const path = require('path');
const post = require('../models/post');

module.exports.hello = async (req, res) => {
    let data = await post.find({});
    return res.render('Home/home', {
        stData: data,
    });
};