import React from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

import imgTopSvg from "./assets/top-svg.svg";
import imgWoman from "./assets/woman.png";
import { Container } from './styles';

export default function QuemSomos(req, res) {


  return (
    <> 
      <Header />
      
      <Container>

        <div>
          <img style={{ maxWidth:'30%' }} src={imgTopSvg} alt="Nunca foi tão fácil realizar uma compra online, perto de você e sem sair de casa."/>
          <span style={{ margin: '60px 20% 0 40px', maxWidth:'70%'}} >
              O PRODUTO é focado na cotação para o consumidor que escolhe a loja que quer 
              pedir, fala com o vendedor, realiza pagamento por link e finaliza a transação 
              por meio de retirada ou serviço de entrega.

              <Button style={{ marginTop: '20px', marginLeft:0}}>Saiba Mais</Button>
          </span>
        </div>

        <h3>Porque <strong>ESCOLHER</strong> a Haio</h3> 
        <div>
            <span style={{ margin: '20px 10px 0 0', maxWidth:'80%' }} >
                Ao CONTRÁRIO do Mercado Eletrônico com o serviço de cotar preços 
                de produtos para empresas o PRODUTO é focado na cotação para o 
                consumidor que escolhe a loja que quer pedir, fala com o vendedor, 
                realiza pagamento por link e finaliza a transação por meio de 
                retirada ou serviço de entrega.

                <Button style={{ marginTop: '20px', marginLeft:0 }}>Saiba Mais</Button>
            </span>

            <img className="foto" style={{ maxWidth:'20%' }} src={imgWoman} alt="Nunca foi tão fácil realizar uma compra online, perto de você e sem sair de casa."/>

        </div>

        <Footer />
      </Container>
      
    </>
  )
  }