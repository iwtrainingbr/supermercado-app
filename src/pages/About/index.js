import React from 'react';
import {Fab} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkIcon from '@mui/icons-material/Work';
import MailIcon from '@mui/icons-material/Mail';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function About (){
  const [disabled, setDisabled] = React.useState(false);
  let instagram = "alessandro_feitoza";
  let phone = "(85) 9 8674-0502";
  let email = "alessandro@feitoza.tec.br";
  let address = 'Rua Carolino de Aquino, 445, Fatima - Fortaleza-CE';

  let message = `
+------------------------------+ %0A
+---       MERCADO APP      ---+ %0A
+------------------------------+ %0A
+                              + %0A
+                              + %0A
+------------------------------+ %0A
+ **PEDIDOS**                  + %0A
+------------------------------+ %0A
+ 1 Arroz             R$ 5.90  + %0A
+ 3 Ovos              R$ 2.40  + %0A
+ 5 Tomates           R$ 7.15  + %0A
+                              + %0A
+ **Total**          R$ 15.45  + %0A
+------------------------------+ %0A
+ Horário             10:56    + %0A
+------------------------------+ %0A
`;

  const openWhatsapp = () => {
    window.location.href = `https://api.whatsapp.com/send?1=pt_BR&phone=55${phone}&text=${message}`;
  }

  const openMap = () => {
    window.location.href = "https://maps.google.com?q="+address;
  }

  const openCallPhone = () => {
    window.location.href = "tel:"+phone;
  }

  const openEmail = () => {
    window.location.href = "mailto:"+email;
  }

  const openInstagram = () => {
    if (disabled === true) {
      return;
    }

    setDisabled(true);
    window.location.href = "https://instagram.com/"+instagram;
  }

  return(
    <section style={{paddingRight: 10}}>
    <List>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Quando foi criado" secondary="19 de Outubro/21" />
      </ListItem>
      <ListItem button onClick={openMap}>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Local" secondary="Fortaleza-CE" />
      </ListItem>
      <ListItem button >
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Versão" secondary="1.0.0" />
      </ListItem>

      <ListItem button disabled={disabled} onClick={openCallPhone}>
        <ListItemAvatar>
          <Avatar>
            <PhoneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Telefone" secondary={phone} />
      </ListItem>

      <ListItem button disabled={disabled} onClick={openEmail}>
        <ListItemAvatar>
          <Avatar>
            <MailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={email} />
      </ListItem>

      <ListItem button disabled={disabled} onClick={openInstagram}>
        <ListItemAvatar>
          <Avatar>
            <MailIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Instagram" secondary={instagram} />
      </ListItem>
    </List>

      <div align="right">
        <Fab color="primary" onClick={openWhatsapp} aria-label="add">
          <PhoneIcon />
        </Fab>
      </div>
    </section>
  );
};
