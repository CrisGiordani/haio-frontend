import React, { useState } from "react";

import Notifications from "../Notifications";
import Button from "../Button";

import { FiMenu, FiX } from 'react-icons/fi';

import SejaParceiro from '../../pages/SejaParceiro';
import CadastreSe from '../../pages/CadastreSe';

import haio from "../../assets/haio.svg";

import { Container, Content, Profile, MenuItem, MenuMobile, MenuMobileItem, MobileTitle } from "./styles";


// BEGIN MODAL SETTINGS
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: '#F6F9FB',
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),  
    overflow:'scroll',
    left: '50%', 
    top: '50%',
    width: '90%',
    minWidth: '300px',
    maxWidth: '600px',
    maxHeight: '90%',
    transform: 'translate(-50%, -50%)',
    display:'block'
  },
}));
// END MODAL SETTINGS

export default function Header({children}) {
  
  const [visible, setVisible] = useState(false);

  // BEGIN MODAL 
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState('');

  function handleOpen(page) {
    setOpen(true); 

    if(page === 'SejaParceiro') { 
      setBody(<div className={classes.paper}><SejaParceiro /></div>); 
    }
    if(page === 'CadastreSe') {
      setBody(<div className={classes.paper}><CadastreSe /></div>);
    }

  };

  const handleClose = () => {
    setBody('');
    setOpen(false);
  };

  // END MODAL

  // MENU MOBILE
  function handleToggleVisible() {
    setVisible(!visible);
  }


  // useSelector Redux || localStorage
  const logged = false;
  const user = {
    name: 'Cristian',
    email: 'cristian@cuby.com.br',
    whatsapp: '5551984100800',
  }
  return (
    
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <Content>
        <nav>
          <img src={haio} alt="Haio" />
          <MobileTitle>: : &nbsp; &nbsp; {children}</MobileTitle>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/quem_somos">Quem somos</MenuItem>
          <MenuItem to="/atendimento">Atendimento</MenuItem>
          <MenuItem onClick={() => handleOpen('SejaParceiro')}>Seja Parceiro</MenuItem>
          <MenuItem onClick={() => handleOpen('CadastreSe')}>Cadastre-se</MenuItem>
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
        <colapsed>
          <FiMenu color="#BE0E02" onClick={handleToggleVisible} />
          <MenuMobile visible={visible}>
            <FiX color="#FFF" style={{ margin: '12px 8px'}} onClick={handleToggleVisible} />
            <MenuMobileItem to="/">Home</MenuMobileItem>
            <MenuMobileItem to="/quem_somos">Quem somos</MenuMobileItem>
            <MenuMobileItem to="/atendimento">Atendimento</MenuMobileItem>
            <MenuMobileItem onClick={() => handleOpen('SejaParceiro')}>Seja Parceiro</MenuMobileItem>
            <MenuMobileItem onClick={() => handleOpen('CadastreSe')}>Cadastre-se</MenuMobileItem>
          </MenuMobile>
        </colapsed>
      </Content>
    </Container>
  );
}
