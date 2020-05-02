import React from "react";

import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

// assets 
import homeTopText from "./assets/top_text.svg";
import homeTopImg from "./assets/top_img.svg";
import shoppingCart from "./assets/shopping-cart.svg";
// global assets
import starIcon from "../../assets/star.png";

import { Container, Destaques, Card, Info } from './styles';

export default function Home(req, res) {

  const destaques = [
    {
      id: '000000001', //uuid 
      avatar: 'id-01.jpg',
      name: 'Mercado Mangalot',
      setor: 'Mercado',
      score: '4.6',
      distance: '2.5',
      delivery_value: '6.50',
      delivery_time: '30',
    },
    {
      id: '000000002',
      avatar: 'id-02.jpg',
      name: 'Supermercado Barca',
      setor: 'Mercado',
      score: '4.8',
      distance: '0.8',
      delivery_value: '3.50',
      delivery_time: '20',
    },
    {
      id: '000000003',
      avatar: 'id-03.jpg',
      name: 'Mercado Letícia',
      setor: 'Mercado',
      score: '4.7',
      distance: '1.2',
      delivery_value: '4.50',
      delivery_time: '30', 
    }
  ]

  return (
    <> 
      <Header />
      
      <Container>

        <div>
          <img style={{ maxWidth:'60%' }} src={homeTopText} alt="Nunca foi tão fácil realizar uma compra online, perto de você e sem sair de casa."/>
          <img style={{ maxWidth:'25%' }} src={homeTopImg} alt="Haio" />
        </div>

        <span>Descubra um mercadinho mais próximo de você</span>
        <form>
          <input placeholder="Digite seu endereço ou CEP" />
          <Button style={{padding:'22px 40px'}}>Buscar </Button>
        </form>

        <div style={{ marginTop: 80 }}>
          <img style={{ maxWidth:'30%' }} src={shoppingCart} alt="Shopping Cart - Haio"/>
          <span style={{ margin: '40px 20% 0 40px', maxWidth:'50%' }} >
              O PRODUTO é focado na cotação para o consumidor que escolhe a loja que quer 
              pedir, fala com o vendedor, realiza pagamento por link e finaliza a transação 
              por meio de retirada ou serviço de entrega.

              <Button style={{ marginTop: '20px', marginLeft:0}}>Cadastre-se</Button>
          </span>
        </div>

        <h2>Os destaques da Haio</h2>  
        <Destaques>
          {destaques.map(item => (
            <Card key={item.id}>
              <img alt={item.name} src={`https://api.adorable.io/avatars/50/${item.name}.png`} />
              <Info>
                <strong>{item.name}</strong>
                <score>
                    <img src={starIcon} alt="Avaliação" />
                    <nota>{item.score}</nota>
                    {item.setor} - {item.distance} Km
                </score>
                <delivery> 
                  aprox. {item.delivery_time} min [ R$ <span>{item.delivery_value}</span> ]
                </delivery>
              </Info>
            </Card>
          ))}
        </Destaques>

        <Footer />
      </Container>
      
    </>
  )
  }