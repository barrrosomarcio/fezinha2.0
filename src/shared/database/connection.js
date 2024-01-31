import mysql from 'mysql2/promise'
import DotENV from 'dotenv'
import Bluebird from 'bluebird';

DotENV.config()

export const database = await mysql.createConnection({
  host: process.env.MY_SQL_HOST,
  port: process.env.MY_SQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DATABASE,
});

// database.connect(function(err) {
//   if (err) throw err;
//   console.log("Database Connected!");
// });