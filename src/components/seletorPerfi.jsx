export default function SeletorCliente({desconto, setDesconto}) {
    
  return(
    <div className="select-container">
      <select className="select" onChange={(e) => setDesconto(e.target.value)}>
        <option value="">Escolha ...</option>
        <option value="30">Funcionário (30%)</option>
        <option value="20">VIP (20%)</option>
        <option value="15">Parceiro (15%)</option>
        <option value="5">Comum (5%)</option>
      </select>
    </div>
  )
}