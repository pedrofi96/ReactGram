const express = require("express");
const router = express();

//usando rotars importadas do UserRoutes
router.use("/api/users", require("./UserRoutes"));

//Rota de Teste
router.get("/", (req, res) => {
  res.send("API Funcionando!");
});

module.exports = router;
