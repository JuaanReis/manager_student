import { useState } from "react";
import "./ArrayPush.css";

export default function ArrayPush() {
  const [lista, setLista] = useState(["Carlos", "Ronaldo"]);

  function alterar() {
    const novaLista = [...lista];
    novaLista[0] = "Juan";
    setLista(novaLista);
  }

  function adicionar() {
    setLista([...lista, "Enzo"]);
  }

  function remover() {
    setLista(lista.slice(0, -1));
  }

  function adicionarInicio() {
    const novaLista = [...lista];
    novaLista.unshift("Gabriel");
    setLista(novaLista);
  }

  function removerInicio() {
    const novaLista = [...lista];
    novaLista.shift();
    setLista(novaLista);
  }

  return (
    <main className="main">
      <header className="header">
        <h1>Lista de alunos</h1>
      </header>
      <div className="lista">
        <ul className="lista-nomes">
          {lista.map((nome, index) => (
            <p key={index} className="item">{nome}</p>
          ))}
        </ul>
        
        <div className="controles">
          <button className="btn" onClick={adicionar}>Adicionar</button>
          <button className="btn" onClick={adicionarInicio}>Adicionar Início</button>
          <button className="btn" onClick={remover}>Remover</button>
          <button className="btn" onClick={removerInicio}>Remover Início</button>
          <button className="btn" onClick={alterar}>Alterar</button>
        </div>
      </div>
      <footer className="footer">
        <p>Site feito por Juan T. Reis e Leonardo Alves de Souza</p>
      </footer>
    </main>
);
}