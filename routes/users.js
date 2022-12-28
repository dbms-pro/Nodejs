var express = require('express');
var router = express.Router();
const connection = require('../config/database');
var formSubmit=require('../queries/users/login')
/* GET home page. */
router.get('/', function(req, res, next) {
  let product=[

    {
      name:"Biriyani",
      images:"images/product-1.png",
    },
    {
      name:"Kuzhimanthi",
      images:"images/product-2.png",
    }
  
  ]
  res.render('users/index',{product});
});
router.get('/recipe', function(req, res, next) {
  let product=[

    {
      name:"Biriyani",
      images:"images/product-1.png",
    },
    {
      name:"Kuzhimanthi",
      images:"images/product-2.png",
    }
  
  ]
   
  res.render('users/recipe',{product});
});
router.get('/contact', function(req, res, next) {
  res.render('users/contact');
});
router.get('/about', function(req, res, next) {
  res.render('users/about');
});
router.get('/login', function(req, res, next) {
  res.render('users/login');
});
/* POST login page. */
router.post('/submit', function(req, res) {
console.log(req.body)
let email = req.body.email;
let names = req.body.names;
let phone= req.body.phone;
let password = req.body.password;

connection.query(
  'SELECT * FROM registers WHERE email = ?',
  [email],
  (error, results) => {
    if (error) throw error;

    if (results.length > 0) {
      console.log('Email is already registered');
      // Return an error or redirect the user to a different page here
      res.send('alread');
    }
    else{
      const sql = 'INSERT INTO registers (Name,phone, email, password) VALUES (?, ?, ?, ?)';
const values = [names,phone, email, password];
connection.query(sql, values, (error, result) => {
  if (error) throw error;
  console.log(result.affectedRows + ' row(s) inserted');
  res.send('got it')
  
});

    }
  }
 
);

formSubmit.register(req.body);
});
router.get('/logindex', function(req, res, next) {
  let product=[

    {
      name:"Biriyani",
      images:"images/product-1.png",
    },
    {
      name:"Kuzhimanthi",
      images:"images/product-2.png",
    }
  
  ]
  res.render('users/logindex',{product});
});
router.get('/logrecipe', function(req, res, next) {
  let product=[

    {
      name:"Biriyani",
      images:"images/product-1.png",
    },
    {
      name:"Kuzhimanthi",
      images:"images/product-2.png",
    }
  
  ]
  res.render('users/logrecipe',{product});
});
router.get('/logcontact', function(req, res, next) {
  res.render('users/logcontact');
});
router.get('/logabout', function(req, res, next) {
  res.render('users/logabout');
});

module.exports = router;


