import "bootstrap/dist/css/bootstrap.min.css";

function ComponentTest (props) {
  return (
    <>
      Componente customizado
      {props.children}
    </>
  );
}


export default function Login() {
  return (
    <div className="container">
      <form>
        <label for="email">Email</label>
        <input
          id="email"
          placeholder="Email"
          className="form-control"
        />

        <label for="password">Senha</label>
        <input
          id="password"
          placeholder="Senha"
          type="password"
          className="form-control"
          required
        />

        <ComponentTest>
        123
        </ComponentTest>


        <button className="btn btn-primary">
          Entrar
        </button>
      </form>
    </div>
  )
}
