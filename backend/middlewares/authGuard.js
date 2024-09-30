const User = require("../models/User");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const authGuard = async (req, res, next) => {
  //headers tera authorization por causa do token
  const authHeader = req.headers["authorization"];
  //tendo authorization condicional que verificar se ela existe e pega a segunda parte do header
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ errors: ["Acesso Negado!"] });

  try {
    const verified = jwt.verify(token, jwtSecret);

    //faz a requisição do usuário verificando sem a senha.
    req.user = await User.findById(verified.id).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ errors: ["token invalido!"] });
  }
};

module.exports = authGuard;
