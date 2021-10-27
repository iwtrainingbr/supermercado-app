import React, {useState} from "react";
import {Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Login from "../pages/Login";
import {userLogged} from "../security/Authentication";

const Vehicles = React.lazy(() => import ("../pages/Vehicles"));
const Report = React.lazy(() => import ("../pages/Report"));
const Test = React.lazy(() => import ("../pages/Test"));
const Config = React.lazy(() => import ("../pages/Config"));
const Orders = React.lazy(() => import ("../pages/Orders"));
const Products = React.lazy(() => import ("../pages/Products"));
const About = React.lazy(() => import ("../pages/About"));
const Contacts = React.lazy(() => import ("../pages/Contacts"));
const Category = React.lazy(() => import ("../pages/Category"));
const NotFound = React.lazy(() => import ("../pages/NotFound"));
const Counter = React.lazy(() => import ("../pages/Counter"));
const Carrinho = React.lazy(() => import ("../pages/Shop"));
const Home = React.lazy(() => import ("../pages/Home"));
const Register = React.lazy(() => import ("../pages/Register"))
const Deliveryman = React.lazy(() => import ("../pages/Deliveryman"));

export default function Routes() {
  const [logged, setLogged] = useState(userLogged());

  if (logged === null) {
    return (
        <Switch>
          <Route exact path="/" component={() => Login({setLogged: setLogged})}/>
          <Route path="/login" component={() => Login({setLogged: setLogged})}/>
          <Route path="/cadastro" component={Register}/>
          <Route path="/*" component={NotFound}/>
        </Switch>
    );
  }

  return (
    <>
      <Navbar setLogged={setLogged}/>

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
    </>
  )
}
