var express = require('express');
var router = express.Router();
var products = require('../recipes/product');
let product = products.getProducts();
const connection = require('../config/database');
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



/* POST login page. */
router.post('/submit', (req, res) => {
  const { names, email, password } = req.body;

  connection.query(
    'SELECT * FROM registration WHERE Email = ?',
    [email],
    (error, results) => {
      if (error) throw error;

      if (results.length > 0) {
        console.log('Email is already registered');
        // Return an error or redirect the user to a different page here
        res.send('alread');
      } else {
        const sql = 'INSERT INTO  registration (Name,Email,Password) VALUES ( ?, ?, ?)';
        const values = [names, email, password];
        connection.query(sql, values, (error, result) => {
          if (error) throw error;
          console.log(result.affectedRows + ' row(s) inserted');
          res.send('got it');
        });
      }
    }
  );
});


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


