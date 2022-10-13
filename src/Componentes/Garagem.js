import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={props.mensagemApresentacao}>Mensagem</button>
      <Carro adicionadoPor={props.nome} cor={"Vermelho"} ano={2022} flex={"true"}/>
      <Carro adicionadoPor={props.nome} cor={"Verde"} ano={2020} flex={"false"}/>
      <Carro adicionadoPor={props.nome} cor={"Amarelo"} ano={2009} flex={"false"}/>
      <Carro adicionadoPor={props.nome} cor={"Rosa"} ano={2022} flex={"true"}/>
      <Carro adicionadoPor={props.nome} cor={"Branco"} ano={2021} flex={"true"}/>
      <Carro adicionadoPor={props.nome} cor={"Cinza"} ano={2015} flex={"false"}/>
      <Carro adicionadoPor={props.nome} cor={"Azul"} ano={2017} flex={"true"}/>
      <Carro adicionadoPor={props.nome} cor={"Roxo"} ano={2012} flex={"false"}/>
    </div>
  );
}

export default Garagem;
