var express = require('express');
var router = express.Router();
const { registerUser } = require('../queries/user/register');
const { loginUser } = require('../queries/user/login');
const start = require('../queries/user/recipeviewu');
const connection = require('../config/database');
/* GET home page. */
router.get('/', function(req, res, next) {
  start.recipeviewu((error, data) => {
    if (error) throw error;
  res.render('users/index', {recipe: data});
});
});


/* GET recipe page. */

router.get('/recipe', function(req, res, next) {
  start.recipeviewu((error, data) => {
    if (error) throw error;
    res.render('users/recipe', {recipe: data});
  });
  
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
  start.recipeviewu((error, data) => {
    if (error) throw error;
    res.render('users/logindex', {recipe: data});
  });
});

router.get('/singleview', function(req, res, next) {
  start.recipeviewu((error, data) => {
    if (error) throw error;
    res.render('users/singleview', {recipe: data});
  });
  
});
/* GET logrecipe page. */
router.get('/logrecipe', function(req, res, next) {
  start.recipeviewu((error, data) => {
    if (error) throw error;
    res.render('users/logrecipe', {recipe: data});
  });
  
});

/* GET logcontact page. */
router.get('/logcontact', function(req, res, next) {
  res.render('users/logcontact');
});


/* GET logabout page. */
router.get('/logabout', function(req, res, next) {
  res.render('users/logabout');
});

router.get('/view_image/:id', (req, res) => {
  // Retrieve the image data from the database
  const sql = 'SELECT data FROM images WHERE id = ?';
  connection.query(sql, [req.params.id], (error, results) => {
    if (error) throw error;

    // Send the image data back as a response
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(results[0].data);
  });

});

router.get('/recipesss/:id', (req, res) => {
  // code to fetch data from database 
  const sql ='SELECT * FROM recipe WHERE ID = ?';
  connection.query(sql, [req.params.id], (error, results) => {
      if (error) throw error;
      res.setHeader('Content-Type', 'application/json');
res.send(results[0],data);

  });
  

  
  
});
module.exports = router;
