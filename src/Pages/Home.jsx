import React, { useEffect, useState } from "react";
import api from "../Services/api"
import "./Home.css"


// /movie/now_playing?api_key=261deb0f618d599f8b3fdc1ea83f4972&language=pt-BR

function Home() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing?", {
                params: {
                    api_key: "261deb0f618d599f8b3fdc1ea83f4972",
                    language: "pt-BR",
                    page: 1
                }
            })
            // console.log(response.data.results)
            setFilmes(response.data.results.slice(10))
        }
        loadFilmes()
        setLoading(false)
    }, [])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }


    return (
        <div className="container">
            <div className="listafilmes">
                {filmes.map((item)=>{
                    return(
                        <article key={item.id}>
                            <h1>{item.title}</h1>
                            <img className="img" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="poster" />
                            <a className="links" href={`/filmes/${item.id}`}>Acessar</a>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;