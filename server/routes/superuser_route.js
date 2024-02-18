const express = require("express");
const {signup } = require("../controllers/Superuser_controller");
const router = express.Router();

router.route("/signup").get(signup);
module.exports = router;
