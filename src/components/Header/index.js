import React from "react";

import Notifications from "../Notifications";
import Button from "../Button";

import logo from "../../assets/logo.svg";

import { Container, Content, Profile, MenuItem } from "./styles";

export default function Header() {
  
  // useSelector Redux || localStorage
  const logged = false;
  const user = {
    name: 'Cristian',
    email: 'cristian@cuby.com.br',
    whatsapp: '5551984100800',
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Haio" />
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/">Quem somos</MenuItem>
          <MenuItem to="/">Atendimento</MenuItem>
          <MenuItem to="/">Seja Parceiro</MenuItem>
          <MenuItem to="/">Cadastre-se</MenuItem>
        </nav>

        <aside>
            { 
            logged ? (
              <>
              <Notifications />
              <Profile>
                <img
                  src={`https://api.adorable.io/avatars/50/${user.name}.png`}
                  alt={user.name}
                />
                <div>
                  <strong>{user.name}</strong>
                  <MenuItem to="/profile">Perfil</MenuItem>
                </div>
              </Profile>
              </>
             ) : (
              <Button>Entrar</Button>
            )
          }
        </aside>
      </Content>
    </Container>
  );
}
