var express = require('express');
var router = express.Router();
/* var products = require('../recipes/product');
let product = products.getProducts(); */
const { registerUser } = require('../queries/user/register');
const { loginUser } = require('../queries/user/login');
const {recipeview} =require('../queries/admin/recipeview');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/index',{recipeview});
});


/* GET recipe page. */
router.get('/recipe', function(req, res, next) {
  res.render('users/recipe',{recipeview});
});


/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('users/contact');
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('users/about');
});


/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('users/login');
});


/* POST register page. */
router.post('/submit', registerUser);


/* POST login page. */
router.post('/loginto', loginUser);


/* GET logindex page. */
router.get('/logindex', function(req, res, next) {
  res.render('users/logindex',{recipeview});
});


/* GET logrecipe page. */
router.get('/logrecipe', function(req, res, next) {
  res.render('users/logrecipe',{recipeview});
});


/* GET logcontact page. */
router.get('/logcontact', function(req, res, next) {
  res.render('users/logcontact');
});


/* GET logabout page. */
router.get('/logabout', function(req, res, next) {
  res.render('users/logabout');
});


module.exports = router;
