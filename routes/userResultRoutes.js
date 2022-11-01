const express = require("express");
const { createResult, getUserResult } = require("../controllers/userResultController");
const userRequireAuth = require("../middlewares/userRequireAuth");

// express router
const router = express();

router.post("/", userRequireAuth, createResult);
// router.post("/", createResult);

router.get("/:id", userRequireAuth, getUserResult);

module.exports = router;