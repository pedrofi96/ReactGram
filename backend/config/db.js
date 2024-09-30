const mongoose = require("mongoose");
// Importa as variáveis do arquivo de configuração (dotenv.js)
const MONGO_URL = "mongodb://localhost:27017";
// Usa a variável de ambiente para a URL do MongoDB
console.log("Tentando conectar ao MongoDB com a URL:", MONGO_URL);

// Conecta ao MongoDB usando a URL do arquivo dotenv.js
mongoose.connect(MONGO_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Conectado ao MongoDB!");
});

module.exports = db;
