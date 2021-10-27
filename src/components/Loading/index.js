import logo from "./logo-app.png";
import {LinearProgress} from "@mui/material";

export default function Loading() {
  return (
    <div style={{marginTop: 50, textAlign: 'center'}}>
      <img width="80%" src={logo}/>

      <LinearProgress/>
    </div>
  )
}
