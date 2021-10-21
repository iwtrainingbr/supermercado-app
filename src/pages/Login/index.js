
import {Button, TextField, Divider} from "@mui/material";
import "./styles.scss";
import {Link} from "react-router-dom";

export default function Login() {
  return (
    <div className="page-login">
      <form>
        <h1>Login</h1>

        <Divider/>

        <TextField fullWidth label="Email"/>

        <TextField type="password" fullWidth label="Senha"/>

        <Button fullWidth color="primary" size="large" variant="contained">
          Entrar
        </Button>
      </form>

      <div align="center">
        <p> Ainda não possui uma conta?
        <Link to="/cadastro" component={Button}>Cadastre-se!</Link></p>
      </div>
    </div>
  )
}
