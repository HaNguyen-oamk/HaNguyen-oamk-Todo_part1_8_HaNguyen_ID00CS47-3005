import { pool } from "../helpers/db.js";

const selectAllTasks = async () => {
  return await pool.query("select * from task");
};

const insertTask = async (description) => {
  return await pool.query(
    "insert into task (description) values ($1) returning *",
    [description]
  );
};

const deleteTaskById = async (id) => {
  return await pool.query("DELETE FROM task WHERE id = $1 RETURNING *", [id]);
};

export { selectAllTasks, insertTask, deleteTaskById };
