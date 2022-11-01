const express = require("express");
const { createResult, getUserResult, getAllResults } = require("../controllers/userResultController");
const userRequireAuth = require("../middlewares/userRequireAuth");

// express router
const router = express();

router.post("/", userRequireAuth, createResult);

router.get("/", userRequireAuth, getAllResults);

router.get("/:id", userRequireAuth, getUserResult);

module.exports = router;