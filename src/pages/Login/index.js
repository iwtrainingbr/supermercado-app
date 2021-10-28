import {Button, TextField, Divider} from "@mui/material";
import "./styles.scss";
import {Link} from "react-router-dom";
import {makeLogin} from "../../security/Authentication";

export default function Login(props) {

  const validLogin = () => {
    /*
      let data = {
        email: 'a@a.com',
        password: '123456',
      };

      fetch('api/login', {
        method: 'POST',
        body: JSON.stringify(data)
      })
    */

    makeLogin();
    props.setLogged(true);
  }

  return (
    <div className="page-login">
      <form>
        <h1>Login</h1>

        <Divider/>

        <TextField data-cy="email" fullWidth label="Email"/>

        <TextField data-cy="password" type="password" fullWidth label="Senha"/>

        <Button data-cy="btn-enter" onClick={validLogin} fullWidth color="primary" size="large" variant="contained">
          Entrar
        </Button>
      </form>

      <div align="center">
        <p> Ainda não possui uma conta?
        <Button to="/cadastro" component={Link}>Cadastre-se!</Button></p>
      </div>
    </div>
  )
}
