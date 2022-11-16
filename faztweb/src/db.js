const mysql = require("mysql2/promise");
require('dotenv').config()

async function connectDB() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    ssl: {
      rejectUnauthorized: false
    }
  });

  const result = await connection.query("SELECT 1 + 1 AS result");
  console.log(result);
}

module.exports = connectDB;
