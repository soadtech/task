export const createTableUser = `CREATE TABLE IF NOT EXISTS users(
    id INTEGER(2) PRIMARY KEY,
    name TEXT
  );`;

export const createTableTask = `
  CREATE TABLE IF NOT EXISTS task(
    id INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    type TEXT
);`;


export const queryUsers = {
  createName: `INSERT INTO users (name) VALUES (?)`,
  getName: `SELECT name FROM users LIMIT 1`
}
export const queryTask = {
  createTask: `INSERT INTO task (name,description,type) VALUES (?,?,?)`,
  getAlltask: `SELECT * FROM task`,
  updateTask: `UPDATE task SET description = ? WHERE id=?`,
  getTaskByType: `SELECT * FROM task WHERE type=?`,
  deleteTask: `DELETE FROM task WHERE id=?`
}