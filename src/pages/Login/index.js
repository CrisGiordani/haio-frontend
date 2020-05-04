import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import {
  LoginContainer,
  Form,
  Title,
} from "./styles";

// import logoImg from "../../assets/logo.svg";
// import ilustrationImg from "../../assets/ilustration.png";

export default function Login() {
  const [ mobile, setMobile ] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      history.push("/profile");
    } catch {
      console.log("erro");
    }
  }

  return (
    <LoginContainer>
      <Form onSubmit={handleLogin}>
          <Title>Faça seu login</Title>
          <input
            placeholder="Celular com DDD"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
      </Form>
    </LoginContainer>
  );
}
