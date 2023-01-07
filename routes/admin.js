var express = require('express');
const multer = require('multer');
var router = express.Router();
const bodyParser = require('body-parser');
const user=require('../queries/admin/user');
const fs = require('fs');
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));
const recip =require('../queries/admin/recipeview');
const upload = multer({ dest: 'uploads/' });
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
router.get('/users', function(req, res, next) {
  user.getUsers((error, results) => {
    if (error) throw error;
    res.render('admin/userview', {results: results});
  });
})
router.post('/add_recipe', upload.single('image'), (req, res) => {
  // Read the image file from the request and store it in the database
  const data = fs.readFileSync(req.file.path);
  const sql = 'INSERT INTO images (data) VALUES (?)';
  connection.query(sql, [data], (error, results) => {
    if (error) throw error;

    // Insert the rest of the recipe data into the database
    const recipeSql = 'INSERT INTO recipe (recipe_name, ingredients,recipe , image_id) VALUES (?, ?, ?, ?)';
    connection.query(recipeSql, [req.body.recipeName, req.body.ingredients, req.body.recipe, results.insertId], (error, results) => {
      if (error) throw error;

      res.send('Recipe added successfully');
    });
  });
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

/* router.post('/admin/deleterecipe/:id', deleteRecipe); */
/* router.get('/admin/recipemgmt/delete/:id',function(req,res,next){
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
}); */



module.exports = router;
