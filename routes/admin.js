var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const user=require('../queries/admin/user');
const {addRecipe }= require('../queries/admin/add_recipe');
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

router.delete('/users/:Email', function(req, res, next) {
  user.deleteUser(req.params.Email, (error) => {
    if (error) throw error;
    res.send('User deleted');
  });
});





module.exports = router;
