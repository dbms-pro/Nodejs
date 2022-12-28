var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/index')
});
router.post('/add-recipe', function(req, res, next) {
  console.logr(req.body)
  console.log(req.files.mage)
});
module.exports = router;
