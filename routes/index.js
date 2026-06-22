var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movieController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/movies/movieHome');
});

router.get('/movies/movieHome', movieController.movieHome);
module.exports = router;
