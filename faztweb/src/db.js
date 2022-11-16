const mysql = require("mysql2/promise");

async function connectDB() {
  const connection = await mysql.createConnection({
    host: "us-east.connect.psdb.cloud",
    user: "244n3b7hex1zesnl3yj8",
    password: "pscale_pw_lLCeHtJ7cf8ZVX6hFBK8sU0REWE6WJzAXUhJ4i7EzxF",
    database: "expressdb",
    ssl: {
      rejectUnauthorized: false
    }
  });

  const result = await connection.query("SELECT 1 + 1 AS result");
  console.log(result);
}

module.exports = connectDB;
