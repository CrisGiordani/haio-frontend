import React from "react";

import logo from "../../assets/logo.svg";

import Button from '../../components/Button';

import { ModalContainer } from './styles';

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

            <Button className="button" style={{ marginTop: '20px', width: '100%', fontSize: '1em' }}>Criar minha conta e acessar a plataforma</Button>
        </form>
      </ModalContainer>
  )
  }