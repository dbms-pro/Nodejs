const connection = require('../../config/database');

// Function to delete a recipe from the database
function deleteRecipe(req, res) {
  const { id } = req.params; // Assume the ID of the recipe is passed as a URL parameter
  if (!id) {
    console.log('Please provide a valid ID');
    res.render('admin/recipemgmt');
    return;
  }

  // Construct the DELETE statement
  const sql = 'DELETE FROM recipe WHERE id = ?';
  const values = [id];
  // Execute the DELETE statement
  connection.query(sql, values, (error, result) => {
    if (error) {
      console.error(error);
      console.log('Error happened');
      res.render('admin/recipemgmt');
      return;
    } else {
      console.log(result.affectedRows + ' row(s) deleted');
      res.render('admin/recipemgmt');
    }
  });
}

// Export the deleteRecipe function
module.exports = {
  deleteRecipe: deleteRecipe
};
