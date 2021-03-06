import React from "react";

import iconInstagram from "../../assets/icon-instagram.png";
import iconTwitter from "../../assets/icon-twitter.png";
import iconFacebook from "../../assets/icon-facebook.png";

import { Container, Navegacao, ColBlock, Copyright } from "./styles";


export default function Footer() {
  
  return (
    <Container>
      <Navegacao>
        <ColBlock>
          <strong>Categorias</strong>
          <ul>
            <li>Mercados</li>
            <li>Lojas</li>
            <li>Farmácias</li>
            <li>Bebidas</li>
          </ul>
        </ColBlock>
        <ColBlock>
          <strong>Informações de interesse</strong>
          <ul>
            <li>Termos e condições</li>
            <li>Registre seu estabelecimento</li>
            <li>Como fazer compras</li>
            <li>Venda com a Haio</li>
          </ul>
        </ColBlock>
        <ColBlock>
          <strong>Siga-nos</strong>
          <social>
            <img src={iconInstagram} alt="Facebook" />
            <img src={iconTwitter} alt="Twitter" />
            <img src={iconFacebook} alt="Facebook" />
          </social>
        </ColBlock>
      </Navegacao>
      <Copyright>
        © 2020 Haio - HAIO INTERMEDIAÇÃO DE NEGÓCIOS LTDA.<br /> CNPJ 69.800.177/0001-30, Rua Capitão Antonio Rosa, 607, Jardim Paulistano, São Paulo/SP, Brasil.
      </Copyright>
    </Container>
  );
}
