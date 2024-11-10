import { hash } from "bcrypt";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "./db.js";
import jwt from "jsonwebtoken";

const { sign } = jwt;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const initializeTestDb = async () => {
  try {
    const sql = fs.readFileSync(path.resolve(__dirname, "../todo.sql"), "utf8");
    await pool.query(sql);
    console.log("Test database initialized.");
  } catch (error) {
    console.error("Error initializing test database:", error);
  }
};

const insertTestUser = async (email, password) => {
  try {
    const hashedPassword = await new Promise((resolve, reject) => {
      hash(password, 10, (err, hash) => {
        if (err) return reject(err);
        resolve(hash);
      });
    });
    await pool.query("INSERT INTO account (email, password) VALUES ($1, $2)", [
      email,
      hashedPassword,
    ]);
    console.log("Test user inserted successfully");
  } catch (error) {
    console.error("Error inserting test user:", error);
  }
};

const getToken = (email) => {
  return sign({ user: email }, process.env.JWT_SECRET_KEY);
};

export { initializeTestDb, insertTestUser, getToken };
