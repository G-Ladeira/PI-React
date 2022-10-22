import React, { useState } from 'react'
import AlterCadastro from './alterarDados'
import VerPedidos from './pedidos'
import './style.sass'
import Header from '../header';
import Footer from '../footer';
// import NestedList from './NestedList';
import Userdata from './dadosUsuarios';
import Endereco from './enderecos';
//////////////////////////////////
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
//////////////////////////////////

function UserView() {
  const [active, setActive] = useState('perfil')

  return (
    <>
      <Header />
      <div className='user_view'>


        <div className="dataSection">
          {/* ///////////////////// */}
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            className='listMui'
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">

              </ListSubheader>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              
              <ListItemText onClick={() => setActive('perfil')} primary="Perfil" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              
              <ListItemText onClick={() => setActive('endereco')} primary="Endereços" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingBagIcon />
              </ListItemIcon>
              
              <ListItemText onClick={() => setActive('pedido')} primary="Pedidos" />
            </ListItemButton>
          </List>

            {active === 'perfil' && <Userdata setActive={setActive}/>}
            {active === 'endereco' && <Endereco />}
            {active === 'atualizar' && <AlterCadastro  />}{active === 'pedido' && <VerPedidos />}

        </div>
        

      </div>
      <Footer />
    </>
  )
}

export default UserView