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
  getAlltask: `select rs.*, rs2.*, rs3.*, rstotal.*
  from (
    select count(*) as New from task where type = '1' 
  )as rs,
  (
    select count(*) as Complete from task where type = '2' 
  )as rs2,
  (
    select count(*) as Finished from task where type = '3' 
  )as rs3,
  (
    select count(*) as Total from task
  )as rsTotal`,
  updateTask: `UPDATE task SET description = ? WHERE id=?`,
  completeTask: `UPDATE task SET type = 2 WHERE id=?`,
  getTaskByType: `SELECT * FROM task WHERE type=?`,
  deleteTask: `DELETE FROM task WHERE id=?`
}