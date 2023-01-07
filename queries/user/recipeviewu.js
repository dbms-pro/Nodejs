const connection = require('../../config/database');
function recipeviewu(callback) {
    const sql = 'SELECT recipe_name, ingredients, recipe,image_id FROM recipe';
    connection.query(sql, (error, recipe) => {
      if (error) return callback(error);
      callback(null, recipe);
    });
  }
  module.exports={
    recipeviewu:recipeviewu
  };