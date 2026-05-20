function EntradaDados ({dados, aoDigitar}) {

    return(
      <div>
        <input
          type="number"
          value={dados}
          onChange={(e) => aoDigitar(e.target.value)}
          placeholder="Valor do Produto"

          style={{
            width: "250px",
            padding: "15px",
            fontSize: "16px",
            border: "none",
            borderRadius: "12px",
            outline: "none",
            backgroundColor: "#f4f4f4"
          }}
        />
      </div>
    );
}

export default EntradaDados;