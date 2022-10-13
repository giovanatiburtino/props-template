import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = 'Giovana'
  const nome2 = 'Ana'
  function apresentaGaragem(){
    alert(`Boas vindas à garagem da ${nome}`)

  }
  return (
    <div className="App">
      <Garagem nome={nome} mensagemApresentacao={apresentaGaragem}/>
      <Garagem nome={nome2} mensagemApresentacao={apresentaGaragem}/>
    </div>
  );
}
