const express = require("express");
const router = express.Router();
const users = require("../../controllers/users");

/* GET home page. */
router.post("/users/", users.addUser);

module.exports = router;
