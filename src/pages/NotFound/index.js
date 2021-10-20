import img_notfound from "./notfound.svg";
import "./style.css"

export default function NotFound() {
  return (
    <div className="not-found">
      <h5>
        Ops... Desculpe, página não encontrada!
      </h5>
    <img src={img_notfound} alt="página não encontrada"/>
    </div>
  )
}
