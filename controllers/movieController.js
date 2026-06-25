const {Movie, Recentmovie} = require('../models');
const express = require("express");

module.exports.movieHome = async function (req, res){
    const recentMovies = await Recentmovie.findAll();
    let recentThree = recentMovies.slice(-3);
    res.render('movies/movieHome', {recentThree});
}