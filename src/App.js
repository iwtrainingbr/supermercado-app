import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Report from "./pages/Report";
import Test from "./pages/Test";
import Config from "./pages/Config";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import About from "./pages/About";
import Category from "./pages/Category"
import Contacts from "./pages/Contacts"
import Navbar from "./components/Navbar";



function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/relatorios" component={Report}/>
        <Route path="/teste" component={Test}/>
        <Route path="/configuracoes" component={Config}/>
        <Route path="/pedidos" component={Orders}/>
        <Route path="/produtos" component={Products}/>
        <Route path="/quem-somos" component={About}/>
        <Route path="/contatos" component={Contacts}/>
        <Route path="/Categorias" component={Category}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
