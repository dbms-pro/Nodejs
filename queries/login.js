const connection = require('../config/database');
function loginUser(req, res) {
    const { email, your_pass } = req.body;

    // check if email is not empty and password is at least 8 characters long
    if (!email || !your_pass || your_pass.length < 8) {
      console.log('Please enter a valid email and password (minimum 8 characters)');
      res.render('users/login');
      return;
    }
  
    // check if email and password match a row in the database
    connection.query(
      'SELECT * FROM registration WHERE Email = ? AND Password = ?',
      [email, your_pass],
      (error, results) => {
        if (error) {
          console.error(error);
          res.render('users/login');
          return;
        }
  
        if (results.length > 0) {
          console.log('Login successful');
          res.render('users/logindex');
        } else {
          console.log('Invalid email or password');
          res.render('users/login');
        }
      }
    )

}
    module.exports = {
        loginUser: loginUser
    };
    