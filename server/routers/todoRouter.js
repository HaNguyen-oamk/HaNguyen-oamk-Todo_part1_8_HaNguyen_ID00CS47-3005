import { pool } from "../helpers/db.js";
//import express from "express";
import { Router } from "express";
//import { emptyOrRows } from "../helpers/utils.js";
import { auth } from "../helpers/auth.js";
import {
  getTasks,
  postTask,
  deleteTask,
} from "../controllers/TaskController.js";

const router = Router();

router.get("/", getTasks);

// router.get("/", (req, res, next) => {
//   pool.query("SELECT * FROM task", (error, result) => {
//     if (error) return next(error);
//     return res.status(200).json(emptyOrRows(result));
//   });
// });

router.post("/create", postTask);

// router.post("/create", auth, (req, res, next) => {
//   const { description } = req.body;

//   //Validate that description is provided and not null or empty
//   if (!description || description.trim() === "") {
//     return res.status(400).json({ error: "Description is required" });
//   }

//   pool.query(
//     "INSERT INTO task (description) VALUES ($1) RETURNING *",
//     [description],
//     (error, result) => {
//       if (error) {
//         return res.status(500).json({ error: error.message });
//       }
//       return res.status(200).json({
//         id: result.rows[0].id,
//         description: result.rows[0].description,
//       });
//     }
//   );
// });

router.delete("/delete/:id", deleteTask);

// router.delete("/delete/:id", auth, (req, res, next) => {
//   const id = parseInt(req.params.id, 10);
//   pool.query("DELETE FROM task WHERE id = $1", [id], (error, result) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }
//     return res.status(200).json({ id: id });
//   });
// });

export default router;
