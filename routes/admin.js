const express = require("express");

const adminControllers = require("../controllers/admin");

const router = express.Router();

router.get('/',adminControllers.getIndex);

module.exports = router;