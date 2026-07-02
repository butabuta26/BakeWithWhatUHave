const express = require("express");
const router = express.Router();

const accountController = require("../controllers/account.controller");
const { checkAuthenticated } = require("../middleware/auth");

router.get("/", checkAuthenticated, accountController.account);

module.exports = router;