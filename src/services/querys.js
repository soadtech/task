export const createTableUser = `CREATE TABLE IF NOT EXISTS users(
    id INTEGER(2) PRIMARY KEY,
    name TEXT
  );`;


export const queryUsers = {
    createName: `INSERT INTO users (name) VALUES (?)`,
    getName: `SELECT name FROM users LIMIT 1`
}