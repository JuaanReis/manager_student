import { useState } from 'react'
import EntradaDados from './componentes/EntradaDados'
import SeletorPerfil from './componentes/SeletorPerfil'

export default function App() {

  const [valor, setValor] = useState("")
  const [tipo, setTipo] = useState("")
  const [parcelas, setParcelas] = useState(1)

  const calcularDesconto = () => {

    const preco = Number(valor)

    if (!preco || !tipo) {
      return 0
    }

    let desconto = 0

    switch(tipo) {
      case "funcionario":
        desconto = 30
        break

      case "vip":
        desconto = 20
        break

      case "parceiro":
        desconto = 15
        break

      case "comum":
        desconto = 5
        break

      default:
        desconto = 0
    }

    const valorFinal = preco - (preco * desconto / 100)

    return valorFinal
  }

  const valorFinal = calcularDesconto()
  const valorParcela = valorFinal / parcelas

  return(
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#1e1e1e",
        fontFamily: "Arial, sans-serif"
      }}
    >

      <div
        style={{
          width: "400px",
          backgroundColor: "#272727",
          border: "1px solid #3d3d3d",
          borderRadius: "18px",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "25px",
          boxShadow: "0 0 15px rgba(0,0,0,0.4)"
        }}
      >

        <h1
          style={{
            color: "#fff",
            fontSize: "24px"
          }}
        >
          Calculadora de Desconto
        </h1>

        <EntradaDados
          dados={valor}
          aoDigitar={setValor}
        />

        <SeletorPerfil
          tipo={tipo}
          aoSelecionar={setTipo}
        />

        {/* Seletor de parcelas */}
        <select
          value={parcelas}
          onChange={(e) => setParcelas(Number(e.target.value))}
          style={{
            width: "250px",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            color: "#000",
            backgroundColor: "#f4f4f4",
            cursor: "pointer"
          }}
        >
          <option value={1}>1x sem juros</option>
          <option value={2}>2x sem juros</option>
          <option value={3}>3x sem juros</option>
          <option value={4}>4x sem juros</option>
          <option value={5}>5x sem juros</option>
          <option value={6}>6x sem juros</option>
          <option value={7}>7x sem juros</option>
          <option value={8}>8x sem juros</option>
          <option value={9}>9x sem juros</option>
          <option value={10}>10x sem juros</option>
        </select>

        <div
          style={{
            color: "#fff",
            fontSize: "22px",
            textAlign: "center",
            lineHeight: "35px"
          }}
        >
          <div>
            Valor Final: <strong>R$ {valorFinal.toFixed(2)}</strong>
          </div>

          <div>
            {parcelas}x de{" "}
            <strong>
              R$ {valorParcela.toFixed(2)}
            </strong>
          </div>
        </div>

      </div>

    </div>
  )
}