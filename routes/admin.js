var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const add= require('../queries/admin/recipe_q ');
const user=require('../queries/admin/user');
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

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
    res.render('admin/recipemgmt');
});
router.post('/reciee', (req, res) => {
  const name = req.body.name;
  const ingredients = req.body.ingredients;
  const image = req.body.image;
  add.insertRecipe(name, ingredients, image, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});
router.get('/add', function(req, res, next) {
  res.render('admin/addrecipe');
});
/* router.get('/users', function(req, res, next) {
  user.getUsers((error, results) => {
    if (error) throw error;
    res.render('admin/userview', {results: results});
  });

}); */
router.get('/users', function(req, res, next) {
  user.getUsers((error, results) => {
    if (error) throw error;
    res.render('admin/userview', {results: results});
  });
});

router.delete('/users/:email', function(req, res, next) {
  user.deleteUser(req.params.email, (error) => {
    if (error) throw error;
    res.send('User deleted');
  });
});




module.exports = router;
