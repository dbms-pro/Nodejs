var express = require('express');
var router = express.Router();
var products = require('../recipes/product');
let product = products.getProducts();
const connection = require('../config/database');
const { registerUser } = require('../queries/register');
const { loginUser } = require('../queries/login');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/index',{product});
});


/* GET recipe page. */
router.get('/recipe', function(req, res, next) {
  res.render('users/recipe',{product});
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
  res.render('users/logindex',{product});
});


/* GET logrecipe page. */
router.get('/logrecipe', function(req, res, next) {
  res.render('users/logrecipe',{product});
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
