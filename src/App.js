import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Report from "./pages/Report";
import Test from "./pages/Test";
import Config from "./pages/Config";
import Orders from "./pages/Orders";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/relatorios" component={Report}/>
        <Route path="/teste" component={Test}/>
        <Route path="/configuracoes" component={Config}/>
        <Route path="/pedidos" component={Orders}/>
        <Route path="/produtos" component={Products}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
