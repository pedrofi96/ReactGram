const express = require("express");
const router = express.Router();

//Usando a rota de registrar rota do UserController
const { register, login, getCurrentUser } = require("../controller/UserController");

//middlewares
const { validate } = require("../middlewares/handleValidation");
const {
  userCreateValidation,
  loginValidation,
} = require("../middlewares/userValidation");
const authGuard = require("../middlewares/authGuard");

//rotas
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(),validate, login);
router.get('/profile', authGuard , getCurrentUser)

module.exports = router;
