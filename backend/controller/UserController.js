const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

//Gerar token do usuario
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d",
  });
};

//Registrar usuário e logar
const register = async (req, res) => {
  res.send("Registro");
};

module.exports = {
  register,
  generateToken,
};
