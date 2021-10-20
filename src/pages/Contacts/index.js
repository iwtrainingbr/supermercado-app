<<<<<<< HEAD
import {Button, TextField, Divider} from "@mui/material";
import "./styles.scss";
=======
import {Button, TextField, Divider, FormControl, InputLabel, Input} from "@mui/material";
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';


>>>>>>> 8721dab (create mask for phone)

export default function Contatcts() {
  return (
    <div className="page-contacts">
      <form>
        <h1>Formulário de Contato</h1>

        <Divider/>

        <TextField fullWidth label="Nome" placeholder="Fulano Detal AssimAssado"/>

        <TextField fullWidth label="Email" placeholder="Ex: fulanodetal@gmail.com"/>

<<<<<<< HEAD
        <TextField fullWidth label="Telefone" placeholder="Ex: (DDD) 98765-4321"/>
=======
        <FormControl variant="standard">
                <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
                <Input
                  value={values.textmask}
                  onChange={handleChange}
                  name="textmask"
                  id="formatted-text-mask-input"
                  inputComponent={TextMaskCustom}
                />
              </FormControl>

        <TextField fullWidth label="Telefone" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} placeholder="Ex: (DDD) 98765-4321"/>
>>>>>>> 8721dab (create mask for phone)

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
