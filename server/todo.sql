-- Sample content for todo.sql
DROP TABLE IF EXISTS account;
CREATE TABLE account (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS task;
CREATE TABLE task (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
);
