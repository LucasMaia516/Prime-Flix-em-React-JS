import React, { useEffect, useState } from "react";
import "./Favoritos.css"
import { toast } from "react-toastify"

function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem("@primeflix")
        setFilmes(JSON.parse(minhaLista) || [])

    }, [])

    function excluirFilme(id) {

        let filtroFilmes = filmes.filter((item) => { // Filtra os filmes e joga na variável fitroFilmes
            return (item.id !== id) // Retorna todos os filmes com o ID diferente do ID clicado. Ou seja, devolve a lista novamente com todos os filmes que o ID não foi clicado
        })
        setFilmes(filtroFilmes) // Jogando a variável aonde a lista de filmes foi manipulada e chamando novamente para ser renderizado na tela, com a lista atualizada
        localStorage.setItem("@primeflix", JSON.stringify(filtroFilmes)) // Atualizando a lista tbm no localStorage com a variável que possui a lista atualizada!
        alert('Filme removido com sucesso!')
        // toast.success('Filme removido com sucesso!')
    }

    return (
        <div className="meusFilmes">

            <h1>Meus filmes salvos</h1>

            <div className="filmenaosalvo">
                {filmes.length === 0 && <><h2>Você não possui nenhum filme salvo!  :(</h2><img src={require('../imagens/bebetriste.jpg')} alt="bebê triste" /></>}
            </div>


            {filmes.map((item) => {

                return (
                    <div className="container">

                        <ul>
                            <li key={item.id}>
                                <h3>{item.title}</h3>
                                <img className="img" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" />
                                <div>
                                    <button><a href={`/filmes/${item.id}`}>Ver detalhes</a></button>

                                    <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                                </div>

                            </li>
                        </ul>

                    </div>


                )

            })}

        </div>
    )

}

export default Favoritos;