import { pool } from "../helpers/db.js";
//import express from "express";
import { Router } from "express";
//import { hash, compare } from "bcrypt";
//import jwt from "jsonwebtoken";
import { postRegistration, postLogin } from "../controllers/userController.js";

//const { sign } = jwt;
const router = Router();

router.post("/register", postRegistration);
router.post("/login", postLogin);

// router.post("/register", (req, res, next) => {
//   hash(req.body.password, 10, (error, hashedPassword) => {
//     if (error) return next(error);
//     try {
//       pool.query(
//         "INSERT INTO account (email, password) VALUES ($1, $2) RETURNING *",
//         [req.body.email, hashedPassword],
//         (error, result) => {
//           if (error) return next(error); // Database error handling
//           return res
//             .status(201)
//             .json({ id: result.rows[0].id, email: result.rows[0].email });
//         }
//       );
//     } catch (error) {
//       return next(error);
//     }
//   });
// });

// router.post("/login", (req, res, next) => {
//   const invalid_message = "Invalid credentials.";
//   try {
//     pool.query(
//       "select * from account where email=$1",
//       [req.body.email],
//       (error, result) => {
//         if (error) next(error);
//         if (result.rowCount === 0) return next(new Error(invalid_message));

//         compare(req.body.password, result.rows[0].password, (error, match) => {
//           if (error) return next(error);
//           if (!match) return next(new Error(invalid_message));

//           const token = sign(
//             { user: req.body.email },
//             process.env.JWT_SECRET_KEY
//           );
//           const user = result.rows[0];
//           return res.status(200).json({
//             id: user.id,
//             email: user.email,
//             token: token,
//           });
//         });
//       }
//     );
//   } catch (error) {
//     return next(error);
//   }
// });

export default router;
