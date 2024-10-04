import React from "react";
import "./Auth.css";

//components
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log(user)
  };
  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para acompanhar seus amigos</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" onChange={(e)=> setName(e.target.value)}></input>
        <input type="email" placeholder="E-Mail" onChange={(e)=> setEmail(e.target.value)}></input>
        <input type="password" placeholder="Senha" onChange={(e)=>{setPassword(e.target.value)}}></input>
        <input type="password" placeholder="Confirmar Senha" onChange={(e)=>{setConfirmPassword(e.target.value)}}></input>
        <input type="submit" value={"Cadastrar"}></input>
      </form>
      <p>
        Já tem conta? <Link to={"/login"}>Clique Aqui</Link>{" "}
      </p>
    </div>
  );
};

export default Register;
