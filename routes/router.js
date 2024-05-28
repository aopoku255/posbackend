const router = require("express").Router();

router.use("/user", require("../src/controller/user.controller"));

module.exports = router;
