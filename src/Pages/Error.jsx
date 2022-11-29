import React from "react";
import "./Error.css"

function Erro() {
    return (
        <div className="not-found">
            <h1>Error 404</h1>
            <h2>Página não encontrada!</h2>
            <a className="linkErro" href="/">Veja todos os filmes!</a>
        </div>
    )
}

export default Erro;