const { nanoid } = require("nanoid");
const db = require("../services/db");

async function getUsers(req, res) {
  const { role } = req.query;

  const roleValue = ["admin", "customer", "worker"].includes(role)
    ? `WHERE users.role = '${role}'`
    : "";

  const users = await db.query(
    `SELECT * FROM users JOIN profiles ON users.profileId = profiles.id ${roleValue}`
  );
  res.status(200).json(users);
}

async function updateUser(req, res) {
  const { username, email, firstName, lastName, state, role } = req.body;
  const user = await db.query(
    `UPDATE users set username = $1, email = $2, firstName = $3, lastName = $4, state = $5, role = $6 WHERE profileId = ${userId} RETURNING *`,
    [username, email, firstName, lastName, state, role]
  );
  res.status(200).json(user);
}

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

async function deleteUser(req, res) {
  // const { userId } = req.params;
  // await db.query(
  //   `DELETE FROM users
  //  USING profiles
  //  WHERE users.profileId = $1 AND profiles.id = $1`,
  //   [profileId]
  // );
  // return res.status(201).json({ message: "User was deleted" });
}

module.exports = {
  getUsers,
  updateUser,
  addUser,
  deleteUser,
};
