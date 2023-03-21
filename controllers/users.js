const { nanoid } = require("nanoid");
const db = require("../services/db");

async function getUsers(req, res) {
  const users = await db.query(
    "SELECT * FROM users JOIN profiles ON users.profileId = profiles.id"
  );
  res.status(200).json(users);
}

async function getUsersByRole(req, res) {}

async function updateUser(req, res) {}

async function addUser(req, res) {
  const { username, email, role, firstName, lastName, state } = req.body;

  const profileId = nanoid();

  await db.query(
    `INSERT INTO profiles (id, firstName, lastName, state) values ($1, $2, $3, $4) RETURNING *`,
    [profileId, firstName, lastName, state]
  );

  await db.query(
    `INSERT INTO users (username, email, role, profileId) values ($1, $2, $3, $4) RETURNING *`,
    [username, email, role, profileId]
  );

  return res
    .status(201)
    .json({ username, email, role, firstName, lastName, state });
}

async function deleteUser(req, res) {}

module.exports = {
  getUsers,
  getUsersByRole,
  updateUser,
  addUser,
  deleteUser,
};
