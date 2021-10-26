import img_notfound from "./notfound.svg";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import "./styles.scss"

export default function NotFound() {
  return (
    <div className="not-found">
      <h5>
        Ops... Desculpe, página não encontrada!
      </h5>
      <img src={img_notfound} alt="página não encontrada"/>

      <p className="btn-home">
        <Button variant="text" component={Link} to="/">Inicio</Button>
      </p>
    </div>
  )
}
