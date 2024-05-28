const { registerUser } = require("../views/user.service");
const router = require("express").Router();

// CREATE ADMIN
router.get("/register-user", async (req, res) => {
  res.json(await registerUser(req, res));
});

module.exports = router;
