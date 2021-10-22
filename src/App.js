import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Vehicles from "./pages/Vehicles";
import Report from "./pages/Report";
import Test from "./pages/Test";
import Config from "./pages/Config";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import Carrinho from "./pages/Shop";
import Home from "./pages/Home";
import Register from "./pages/Register"
import Deliveryman from "./pages/Deliveryman";


function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/relatorios" component={Report}/>
        <Route path="/teste" component={Test}/>
        <Route path="/configuracoes" component={Config}/>
        <Route path="/pedidos" component={Orders}/>
        <Route path="/produtos" component={Products}/>
        <Route path="/quem-somos" component={About}/>
        <Route path="/veiculos" component={Vehicles}/>
        <Route path="/contatos" component={Contacts}/>
        <Route path="/Categorias" component={Category}/>
        <Route path="/contador" component={Counter}/>
        <Route path="/carrinho" component={Carrinho}/>
        <Route path="/cadastro" component={Register}/>
        <Route path="/entregadores" component={Deliveryman}/>

        <Route path="/*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
