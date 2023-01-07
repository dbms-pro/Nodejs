const connection = require('../../config/database');
// Function to insert a new recipe into the database
  function addRecipe(req, res) {
    const  {recipeName, ingredients, recipe}=req.body;
    if (typeof recipeName === 'undefined' || typeof ingredients === 'undefined' || typeof recipe === 'undefined' || !recipeName.trim().length || !ingredients.trim().length ) {
      console.log('Please fill out all fields');
      res.render('admin/addrecipe');
      return;
    }
  
  // Construct the INSERT statement
  const sql = 'INSERT INTO recipe (recipe_name, ingredients, recipe) VALUES (?, ?, ?)';
  const values = [recipeName, ingredients, recipe];
  // Execute the INSERT statement
  connection.query(sql, values, (error, result) => {
    if (error) {
      // If there was an error, call the callback with the error
      res.render('admin/addrecipe');
      return;
    } else {
      // If the INSERT was successful, call the callback with the results
      console.log(result.affectedRows + ' row(s) inserted');
      res.render('admin/recipemgmt');
    }
  });
};

// Export the addRecipe function
module.exports = {
  addRecipe: addRecipe
};
