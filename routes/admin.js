var express = require('express');
var router = express.Router();
const adminlo=require('../public/javascripts/admin/login')


router.use(express.urlencoded({ extended: true }));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/index');
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
router.post("/adminlog", (req, res) => {
  const form = req.body.form;
  const usernameInput = req.body.usernameInput;
  const passwordInput = req.body.passwordInput;
  adminlo(form, usernameInput, passwordInput);
  res.render('admin/view');
});


module.exports = router;
