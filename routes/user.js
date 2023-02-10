const router = require("express").Router();
const { body } = require("express-validator");

const userControllers = require("../controllers/user");

const { getUserById, signUp, logIn } = userControllers;

router.get("/:userId", getUserById);

router.post(
  "/signup",
  [
    body("name").not().isEmpty(),
    body("email").not().isEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  signUp
);

router.post("/login", logIn);

module.exports = router;
