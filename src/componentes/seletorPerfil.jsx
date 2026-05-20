function SeletorPerfil({tipo, aoSelecionar}){

    return(

        <select
          value={tipo}
          onChange={(e)=>aoSelecionar(e.target.value)}

          style={{
            width: "250px",
            padding: "12px",
            fontSize: "16px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            backgroundColor: "#f4f4f4",
            cursor: "pointer"
          }}
        >

            <option value="">Selecione o tipo</option>
            <option value="comum">Comum</option>
            <option value="vip">VIP</option>
            <option value="funcionario">Funcionário</option>
            <option value="parceiro">Parceiro</option>

        </select>
    );
}

export default SeletorPerfil;