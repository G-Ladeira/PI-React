import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import './style.sass'

export default function NestedList() {

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Perfil" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Endereços" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingBagIcon />
        </ListItemIcon>
        <ListItemText primary="Pedidos" />
      </ListItemButton>
    </List>
  );
}
