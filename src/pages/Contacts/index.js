import {Button, TextField, Divider} from "@mui/material";
import "./styles.scss";

export default function Contatcts() {
  return (
    <div className="page-contacts">
      <form>
        <h1>Formulário de Contato</h1>

        <Divider/>

        <TextField fullWidth label="Nome" placeholder="Fulano Detal AssimAssado"/>

        <TextField fullWidth label="Email" placeholder="Ex: fulanodetal@gmail.com"/>

        <TextField fullWidth label="Telefone" placeholder="Ex: (DDD) 98765-4321"/>

        <TextField
          id="standard-multiline-static"
          fullWidth
          label="Mensagem"
          multiline
          rows={4}
          variant="outlined"
          placeholder="Diga-nos o que deseja!"
        />

        <Button fullWidth color="primary" size="large" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  )
}
