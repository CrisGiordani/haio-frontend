import React from "react";

import logo from "../../assets/logo.svg";

import { ModalContainer } from './styles';

export default function QuemSomos(req, res) {


  return (
    <> 
      <ModalContainer>

        <img style={{ maxWidth:'25%' }} src={logo} alt="Haio"/>

        <h1>Faça seu cadastro <strong>gratuitamente</strong></h1> 

        <form>

          <label>Qual o seu nome completo?</label>
          <input placeholder="Ex: André Fernandes" />
        </form>
      </ModalContainer>
      
    </>
  )
  }