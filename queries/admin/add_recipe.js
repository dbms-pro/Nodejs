const connection = require('../../config/database');
// Function to insert a new recipe into the database
  function addRecipe(req, res) {
    const  {recipeName, ingredients, recipe}=req.body;
    if (!recipeName || !ingredients || !recipe) {
      console.log('Please fill out all fields');
      res.render('admin/addrecipe');
      return;
    }
    
  else{
      // Construct the INSERT statement
  const sql = 'INSERT INTO recipe (recipe_name, ingredients, recipe) VALUES (?, ?, ?)';
  const values = [recipeName, ingredients, recipe];
  // Execute the INSERT statement


  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error(error);
      console.log('Error happened');
      res.render('admin/addrecipe');
      return;
    } else {
      console.log(result.affectedRows + ' row(s) inserted');
      res.render('admin/recipemgmt');
    }
  })
  }
  }
// Export the addRecipe function
module.exports = {
  addRecipe: addRecipe
};
