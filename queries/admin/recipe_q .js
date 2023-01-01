const connection = require('../../config/database');
module.exports = {
    // Insert a new recipe into the database
    insertRecipe: (recipe_name,recipe, ingredients, image, callback) => {
      const sql = `INSERT INTO recipes (Name, Recipe, Ingredient, Images) VALUES (?, ?, ?, ?)`;
      connection.query(sql, [recipe_name, recipe,ingredients, image], (error, result) => {
        if (error) return callback(error);
        callback(null, result);
      });
    },
    
    // Update an existing recipe in the database
    updateRecipe: (ID, name, ingredients, image, callback) => {
      const sql = `UPDATE recipes SET Name = ?, Recipe = ?, Ingredient = ?, Images = ? WHERE ID = ?`;
      connection.query(sql, [recipe_name, recipe,ingredients, image, ID], (error, result) => {
        if (error) return callback(error);
        callback(null, result);
      });
    },
    
    // Delete a recipe from the database
    deleteRecipe: (ID, callback) => {
      const sql = `DELETE FROM recipes WHERE ID = ?`;
      connection.query(sql, [ID], (error, result) => {
        if (error) return callback(error);
        callback(null, result);
      });
    }
  };