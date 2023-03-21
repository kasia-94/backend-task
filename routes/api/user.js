const express = require("express");
const router = express.Router();
const users = require("../../controllers/users");

router.get("/", users.getUsers);
router.get("/users/:role", users.getUsersByRole);
router.patch("/users/:id", users.updateUser);
router.post("/users/", users.addUser);
router.delete("/users/:id", users.deleteUser);

module.exports = router;
