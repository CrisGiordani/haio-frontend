import React from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import img1stText from "./assets/1st-text.svg";
import img2ndText from "./assets/2nd-text.svg";
import imgDeskWork from "./assets/desk-work.svg";

import { Container } from './styles';

export default function Atendimento(req, res) {

  return (
    <> 
      <Header />
      
      <Container>

        <img style={{ maxWidth:'60%', marginBottom: 60}} src={img1stText} alt="Para você que deseja vender online e ter resultados imediato."/>

        <div>
          <img style={{ maxWidth:'45%' }} src={imgDeskWork} alt="Atendimento - Haio"/>
          
          <span>
            <img style={{ maxWidth:'90%' }} src={img2ndText} alt="Tem duvidas, fale com um de nossos consultores online AGORA!"/>
            <Button style={{ marginTop: '20px', width: 280, marginLeft:0 }}>Quero falar com um consultor AGORA</Button>
          </span>
        </div>

        <Footer />
      </Container>
      
    </>
  )
  }