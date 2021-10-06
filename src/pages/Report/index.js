import Test from "../Test";

function Button ({children}) {
  return (
    <button style={{height: 40}}>
      {children}
    </button>
  )
}

export default function Report() {
  return (
    <div>
      <h1>Pagina de relatorio</h1>
      <Test/>

      <button>Listar</button>
      <Button>Listar</Button>
    </div>
  )
}
