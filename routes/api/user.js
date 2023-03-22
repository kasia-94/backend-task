const express = require("express");
const router = express.Router();
const users = require("../../controllers/users");

router.get("/", users.getUsers);
router.patch("/users/:userId", users.updateUser);
router.post("/users/", users.addUser);
router.delete("/users/:userId", users.deleteUser);

module.exports = router;
