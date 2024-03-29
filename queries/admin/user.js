const connection = require('../../config/database');
const axios = require('axios');

async function deleteUser(Email) {
  try {
    const response = await axios.delete(`/users/${Email}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

function getUsers(callback) {
    const sql = 'SELECT Email FROM registration';
    connection.query(sql, (error, results) => {
      if (error) return callback(error);
      callback(null, results);
    });
  }
  
  
  module.exports = {
    deleteUser: deleteUser,
    getUsers: getUsers,
  };