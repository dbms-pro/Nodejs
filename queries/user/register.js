const connection = require('../../config/database');
function registerUser(req, res) {
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
        }
          )}
    })}
    module.exports = {
      registerUser: registerUser
    };
    