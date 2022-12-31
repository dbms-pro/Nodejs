var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');

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




module.exports = router;
