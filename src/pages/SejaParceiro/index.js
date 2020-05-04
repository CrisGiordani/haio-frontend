import React from "react";

import logo from "../../assets/logo.svg";

import { ModalContainer, SubmitButton } from './styles';

export default function QuemSomos(req, res) {


  return (
      <ModalContainer>

        <img style={{ maxWidth:'22%' }} src={logo} alt="Haio"/>

        <h1>Faça seu cadastro <strong>gratuitamente</strong></h1> 

        <form>

            <label>Qual o seu nome completo?</label>
            <input placeholder="Ex: André Fernandes" />

            <label>Qual o seu e-mail?</label>
            <input placeholder="Ex: nome@dominio.com.br" />
            <span>Será usado para acessar a plataforma</span>

            <label>Qual o melhor telefone para falar com você?</label>
            <input placeholder="Ex: (11) 99999-9999" />

            <label>Crie uma senha para acessar a plataforma</label>
            <input placeholder="Ex: André Fernandes" />

            <SubmitButton>Criar minha conta e acessar a plataforma</SubmitButton>
        </form>
      </ModalContainer>
  )
  }