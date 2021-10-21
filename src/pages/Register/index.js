
import {Button, TextField, Divider, FormControl, InputLabel, Input} from "@mui/material";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";



export default function Register() {
  return (
    <div className="page-contacts">
      <form>
        <h1>Cadastro de Usuário</h1>

        <Divider/>

        <TextField fullWidth label="Nome" placeholder="Fulano Detal AssimAssado"/>

        <TextField fullWidth label="Email" placeholder="Ex: fulanodetal@gmail.com"/>

        <TextField fullWidth label="Telefone" placeholder="Ex: (DDD) 98765-4321"/>

        <TextField fullWidth label="CEP" placeholder="Ex: 67891-011"/>

        <TextField fullWidth label="Endereço" placeholder="Bairro Coisado, Rua Aculá Número 123"/>

        <Button fullWidth color="primary" size="large" variant="contained">
          Cadastrar
        </Button>
      </form>
      <div align="center">
      <p> Já possui uma conta?
      <Button variant="text" component={Link} to="/login">Faça o Login!</Button>
      </p>
      </div>
      </div>
  )
}
