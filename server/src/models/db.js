import mysql from 'mysql';
import {
  HOST, DB, USER, PASSWORD,
} from '../config/db.config';

// create connection
const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DB,
});

// open connection
connection.connect((error) => {
  if (error) {
    throw error;
  }
});
