const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
});

function query(sql) {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, results) => {
      if (err) return reject(err);
      
      resolve(results);
    });
  });
}

function createPeopleTable() {
  return query(`
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  );
}

function insertPeople(name) {
  return query(`INSERT INTO people (name) VALUES ('${name}')`);
}

function selectPeople() {
  return query(`SELECT * FROM people ORDER BY created_at DESC`);
}

module.exports = {
  createPeopleTable,
  insertPeople,
  selectPeople,
};
