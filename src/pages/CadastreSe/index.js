import React from "react";

import imgDeskNotebook from './assets/desk-notebook.svg';
import imgText from './assets/img-text.svg';

import { ModalContainer } from './styles';

export default function QuemSomos(req, res) {


  return (
      <ModalContainer>
        <img src={imgDeskNotebook} alt="Cadastre-se no Haio" />
        <div>
          <img src={imgText} alt="Falta pouco para você achar um mercado mais proximo!" />
          <h2>Como deseja continuar?</h2>
          <button>( integração facebook )</button>
          <button>( integração google )</button>
          <button>Email ou Celular</button>
        </div>
      </ModalContainer>
  )
}