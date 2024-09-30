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
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    res.status(422).json({ errors: ["Por favor, utilize outro e-mail"] });
  }

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    name,
    email,
    password: passwordHash,
  });

  if (!newUser) {
    res.status(422).json({
      errors: [
        "Houve um error ao cadastrar usuário novo. Por favor tente mais tarde.",
      ],
    });
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
  });
};

// sign user
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ errors: ["Senha ou email invalidos."] });
  }
  //checar se a senha foi digitada corretamente:
  if (!(await bcrypt.compare(password, user.password))) {
    return res.status(422).json({ errors: ["Senha ou email invalidos."] });
  }

  res.status(201).json({
    _id: user._id,
    profileImage: user.profileImage,
    token: generateToken(user._id),
  });
};

const getCurrentUser = async (req, res) => {
  const user = req.user;

  res.status(200).json(user);

};

module.exports = {
  register,
  login,
  getCurrentUser,
};
