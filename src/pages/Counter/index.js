import {Button} from "@mui/material";
import {useState} from "react";

export default function Counter() {
  const [quantidade, setQuantidade] = useState(1);
  const [remove, setRemove] = useState('none');

  const diminuir = () => {
    if (quantidade === 1) {
      setRemove('block');
      setQuantidade(0);
      return;
    }

    setQuantidade(quantidade - 1);
  };

  const aumentar = () => {
    setRemove('none');
    setQuantidade(quantidade + 1);
  };

  return (
    <div style={{padding: 30}}>
      <h1>Produto X</h1>

      <Button onClick={diminuir} variant="outlined">-</Button>
      {quantidade}
      <Button onClick={aumentar} variant="outlined">+</Button>

      <Button style={{display: remove}} size="small" color="error">
        Remover
      </Button>
    </div>
  )
}
