import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from "@mui/material/Drawer";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {ShoppingCart, Store, Home, Bookmark, Logout, Description, People,Info,DeliveryDining
} from "@mui/icons-material";
import {List, Divider, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {Link} from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sidebar, setSidebar] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeSidebar = () => {
    setSidebar(false);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer
          anchor={"left"}
          open={sidebar}
          onClose={() => setSidebar(false)}
      >

        <Box sx={{width: 250}}>
        <List>


        <ListItem button onClick={closeSidebar} component={Link} to="/">
            <ListItemIcon><Home/></ListItemIcon>
            <ListItemText>Inicio</ListItemText>
          </ListItem>

          <ListItem button onClick={closeSidebar} component={Link} to="/pedidos">
            <ListItemIcon><ShoppingCart/></ListItemIcon>
            <ListItemText>Pedidos</ListItemText>
          </ListItem>

          <ListItem button onClick={closeSidebar} component={Link} to="/produtos">
            <ListItemIcon><Store/></ListItemIcon>
            <ListItemText>Produtos</ListItemText>
          </ListItem>

          <ListItem button onClick={closeSidebar} component={Link} to="/categorias">
            <ListItemIcon><Bookmark/></ListItemIcon>
            <ListItemText>Categorias</ListItemText>
          </ListItem>

          <ListItem button onClick={closeSidebar} component={Link} to="/contatos">
            <ListItemIcon><People/></ListItemIcon>
            <ListItemText>Contatos</ListItemText>
          </ListItem>

          <ListItem button onClick={closeSidebar} component={Link} to="/relatorios">
            <ListItemIcon><Description/></ListItemIcon>
            <ListItemText>Relatorios</ListItemText>
          </ListItem>

          <ListItem button onClick={closeSidebar} component={Link} to="/veiculos">
            <ListItemIcon><DeliveryDining/></ListItemIcon>
            <ListItemText>Veiculos</ListItemText>
          </ListItem>

          <ListItem button onClick={closeSidebar} component={Link} to="/quem-somos">
            <ListItemIcon><Info/></ListItemIcon>
            <ListItemText>Quem Somos</ListItemText>
          </ListItem>

          <Divider/>

          <ListItem button onClick={closeSidebar} component={Link} to="/login">
            <ListItemIcon><Logout/></ListItemIcon>
            <ListItemText>Sair</ListItemText>
          </ListItem>
        </List>
        </Box>
      </Drawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setSidebar(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Menu
          </Typography>

            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Minha Conta</MenuItem>

                <MenuItem onClick={handleClose} component={Link} to="/login">Sair</MenuItem>
              </Menu>
            </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
