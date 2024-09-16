const express = require('express')
const router = express()

//usando rotars importadas do UserRoutes 
router.use('api/users', require('./UsertRoutes'));

//teste rota
router.get('/', (req, res)=>{
  res.send("API Funcionando!");
});


module.exports = router;