const { body } = require('express-validator')

const userCreateValidation = () =>{
  return [body('name').isString().withMessage('O nome é obrigatório').isLength({min: 3}).withMessage('O nome precisa ter no minimo 3 caracteres'), 
    body('email').isString().withMessage('O email é obrigatório').isEmail().withMessage("insira um e-mail válido"),
    body('password').isString().withMessage('escreva a senha').isLength({min: 6}).withMessage('Senha precisa ter no minimo 6 caracteres.'),
    body('confirmPassword').isString().withMessage('Senha Obrigatória').custom((value, {req})=>{
      if(value != req.body.password){
        throw new Error('As senhas não são iguais.')
      }
      return true
    })

  ];
} 


module.exports = {
  userCreateValidation,
}