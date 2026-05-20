import { useState } from "react";
import EntradaValor from "../Componentes/EntradaValor";
import SeletorCliente from "../Componentes/SeletorCliente";
import BotaoCalcular from "../Componentes/BotaoCalcular";
import Resultado from "../Componentes/Resultado";

export default function SimuladorDescontos(){

  const [preco, setPreco] = useState("");
  const [desconto, setDesconto] = useState("");
  const [total, setTotal] = useState(null);

  function calcular(){

    if (preco === "") {
      alert ("Digite um preço valido")
    } if (desconto === "") {
      alert ("selecone um desconto valido")
    }

    let precoD = 0;

    switch(desconto){
      case "30":
        precoD = preco * 0.70;
        break;

      case "20":
        precoD = preco * 0.80;
        break;

      case "15":
        precoD = preco * 0.85;
        break;

      case "5":
        precoD = preco * 0.95;
        break;

      default:
        precoD = preco;
    }

    setTotal(precoD);
  }

 
return(
  <div className="main-container">
    <h1 className="title">Calcular descontos</h1>
    <EntradaValor preco={preco} setPreco={setPreco} />
    <SeletorCliente desconto={desconto} setDesconto={setDesconto} />
    <BotaoCalcular calcular={calcular} />
    <Resultado total={total} desconto={desconto} />
  </div>
  )
}