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



/* POST register page. */
router.post('/submit', (req, res) => {
  const { names, email, password1, password2 } = req.body;

  // Check if all fields are filled out
  if (typeof names === 'undefined' || typeof email === 'undefined' || typeof password1 === 'undefined' || typeof password2 === 'undefined' || !names.trim().length || !email.trim().length || !password1.trim().length || !password2.trim().length) {
    console.log('Please fill out all fields');
    res.render('users/login');
    return;
  }
  
  // Check if passwords match
  if (password1 !== password2) {
    console.log('Passwords do not match');
    res.render('users/login');
    return;
  }

  // Check if email is already registered
  connection.query(
    'SELECT * FROM registration WHERE Email = ?',
    [email],
    (error, results) => {
      if (error) {
        console.error(error);
        res.render('users/login');
        return;
      }

      if (results.length > 0) {
        console.log('Email is already registered');
        res.render('users/login');
        return;
      } else {
        // Insert new row into the registration table
        const sql = 'INSERT INTO registration (Name, Email, Password) VALUES (?, ?, ?)';
        const values = [names, email, password1];
        connection.query(sql, values, (error, result) => {
          if (error) {
            console.error(error);
            res.render('users/login');
            return;
          }
          console.log(result.affectedRows + ' row(s) inserted');
          res.render('users/logindex');
        });
      }
    }
  );
});




/* POST login page. */
router.post('/loginto', (req, res) => {
  const { email, your_pass } = req.body;

  // check if email is not empty and password is at least 8 characters long
  if (!email || !your_pass || your_pass.length < 8) {
    console.log('Please enter a valid email and password (minimum 8 characters)');
    res.render('users/login');
    return;
  }

  // check if email and password match a row in the database
  connection.query(
    'SELECT * FROM registration WHERE Email = ? AND Password = ?',
    [email, your_pass],
    (error, results) => {
      if (error) {
        console.error(error);
        res.render('users/login');
        return;
      }

      if (results.length > 0) {
        console.log('Login successful');
        res.render('users/logindex');
      } else {
        console.log('Invalid email or password');
        res.render('users/login');
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
