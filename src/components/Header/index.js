import React, { useState } from "react";

import Notifications from "../Notifications";
import Button from "../Button";

import SejaParceiro from '../../pages/SejaParceiro';
import CadastreSe from '../../pages/CadastreSe';

import logo from "../../assets/logo.svg";

import { Container, Content, Profile, MenuItem } from "./styles";


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
    transform: 'translate(-50%, -50%)'
  },
}));
// END MODAL SETTINGS

export default function Header() {
  const classes = useStyles();
  // BRGIN MODAL 
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState('');

  function handleOpen(page) {
    setOpen(true); 

    if(page === 'SejaParceiro') { setBody(<div className={classes.paper}><SejaParceiro /></div>); }
    if(page === 'CadastreSe') {
      setBody(<div className={classes.paper}><CadastreSe /></div>);
    }

  };

  const handleClose = () => {
    setBody('');
    setOpen(false);
  };

  // END MODAL

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
          <img src={logo} alt="Haio" />
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
      </Content>
    </Container>
  );
}
