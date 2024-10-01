import React from 'react'

//components
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'

const handleSubmit = (e) =>{
  e.preventDefault()
}

const Register = () => {
  return (
    <div>
      <h2>ReactGram</h2>
      <p>Cadastre-se para acompanhar seus amigos</p>
      <form onSubmit={handleSubmit}> 
          <input type='text' placeholder='Nome'></input>
          <input type='email' placeholder='E-Mail'></input>
          <input type='password' placeholder='Senha'></input>
          <input type='password' placeholder='Confirmar Senha'></input>
          <input type='submit' value={'Cadastrar'}></input>
      </form>
      <p>Já tem conta? <Link to={'/login'}>Clique Aqui</Link> </p>
    </div>
  )
}

export default Register