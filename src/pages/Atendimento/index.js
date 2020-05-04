import React from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import img1stText from "./assets/1st-text.svg";
import img2ndText from "./assets/2nd-text.svg";
import imgDeskWork from "./assets/desk-work.svg";

import { Container, RowBlock } from './styles';

export default function Atendimento(req, res) {

  return (
    <> 
      <Header />
      <Container>

        <img style={{ maxWidth:'45%', minWidth: 250 }} src={img1stText} alt="Para você que deseja vender online e ter resultados imediato."/>

        <RowBlock>
          <img style={{ maxWidth:'45%', minWidth: 250  }} src={imgDeskWork} alt="Atendimento - Haio"/>
          
          <span style={{ maxWidth:'45%', minWidth: 250  }} >
            <img style={{ maxWidth:'90%', minWidth: 300 }} src={img2ndText} alt="Tem duvidas, fale com um de nossos consultores online AGORA!"/>
            <Button style={{ minWidth: 280, marginLeft: 10 }}>Quero falar com um consultor AGORA</Button>
          </span>
        </RowBlock>

        
      </Container>
      <Footer />
    </>
  )
  }