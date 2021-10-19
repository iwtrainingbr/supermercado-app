import {Button, TextField, Divider} from "@mui/material";
import "./styles.css";

export default function Login() {
  return (
    <div className="page-login">
      <form>
        <h1>Login</h1>

        <Divider/>

        <TextField fullWidth label="Email"/>

        <TextField fullWidth label="Senha"/>

        <Button fullWidth color="primary" size="large" variant="contained">
          Entrar
        </Button>
      </form>
    </div>
  )
}
