const {Movie, Recentmovie} = require('../models');
const express = require("express");

module.exports.movieHome = async function (req, res){
    res.render('movies/movieHome')
}