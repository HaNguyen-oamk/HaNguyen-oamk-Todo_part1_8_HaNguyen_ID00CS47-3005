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

/*
const deleteTaskById = async (id) => {
  return pool.query(
    "DELETE FROM task WHERE id = $1 RETURNING *",
    [id],
    (error, result)
  );
};
*/
/*
const deleteTaskById = async (id) => {
  try {
    const result = await pool.query("DELETE FROM task WHERE id = $1", [id]);
    return result.rows[0]; // Return the deleted task (if needed)
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};
*/

const deleteTaskById = async (id) => {
  return await pool.query("DELETE FROM task WHERE id = $1 RETURNING *", [id]);
  //   if (result.rowCount === 0) {
  //     return { success: false, message: "Task not found or already deleted" };
  //   }

  //   return { success: true, deletedTask: result.rows[0] };
  // } catch (error) {
  //   console.error("Error deleting task:", error);
  //   throw error; // Ensure the error is handled in the calling code
  // }
};

// router.delete("/delete/:id", auth, (req, res, next) => {
//   const id = parseInt(req.params.id, 10);
//   pool.query("DELETE FROM task WHERE id = $1", [id], (error, result) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }
//     return res.status(200).json({ id: id });
//   });
// });

export { selectAllTasks, insertTask, deleteTaskById };
