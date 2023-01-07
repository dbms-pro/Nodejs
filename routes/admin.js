var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const user=require('../queries/admin/user');
const {addRecipe }= require('../queries/admin/add_recipe');
/* const {deleteRecipe }= require('../queries/admin/deleterecipe'); */
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
const recip =require('../queries/admin/recipeview');
const connection = require('../config/database');
// parse application/json
router.use(bodyParser.json());


router.use(express.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/index');
});
router.post('/adminlog', function(req, res) {
  const { username,password } = req.body;
  if (username == 'admin' && password == 'password') {
    res.render('admin/view');
  } else {
    res.render('admin/index');
  }
});
router.get('/views', function(req, res, next) {
  res.render('admin/view');
});
router.get('/reci', function(req, res, next) {
  recip.recipeview((error, recipe) => {
    if (error) throw error;
    res.render('admin/recipemgmt', {recipe: recipe});
  });
  
});
router.get('/add', function(req, res, next) {
  
  res.render('admin/addrecipe');
});
router.post('/add_recipe', addRecipe);
router.get('/users', function(req, res, next) {
  user.getUsers((error, results) => {
    if (error) throw error;
    res.render('admin/userview', {results: results});
  });
});

/* router.post('/admin/deleterecipe/:id', deleteRecipe); */
router.get('/admin/recipemgmt/delete/:id',function(req,res,next){
  var id = req.params.id;
var query = `DELETE FROM recipe WHERE ID = ${id}`;
connection.query(query,function(error,data){
  if(error){
    throw error;
  }
  else{
    res.redirect("/admin/recipemgmt");
  }
});
});



module.exports = router;
