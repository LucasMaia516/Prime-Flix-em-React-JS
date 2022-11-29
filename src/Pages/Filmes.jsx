/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../Services/api"
import "./Filmes.css"
import { toast } from "react-toastify"

function Filme() {
    const { id } = useParams()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilme() {
            await api.get(`movie/${id}`, {
                params: {
                    api_key: "261deb0f618d599f8b3fdc1ea83f4972",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    setFilme(response.data)
                    setLoading(false)
                })
                .catch(() => {
                    console.log("Error!")
                })
        }
        loadFilme()


    }, [])


    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filme...</h2>
            </div>
        )
    }

    function salvarFilme() {
        const minhaLista = localStorage.getItem('@primeflix') // Criei uma variável aonde cria uma chave do localStorage para jogar a lista de filmes

        let filmesSalvos = JSON.parse(minhaLista) || [] // Criei uma variável para verificar se essa lista já existe, se já existe, joga dentro da variável "filmesSalvos", se não existir, cria um array vazio para ser incrementado. O JSON.parse é para pegar a lista de objetos e o array dentro dele, e converter para string.

        // Quero verificar se esse filme que tento salvar, se já existe no localStorage no código abaixo.

        const filmeJaSalvo = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id) //Verificando dentro da sua array se tem algum filme com o mesmo ID. O some devolve um valor boolean se, tal coisa buscada no array, se já existe (true) ou se não existe (false)

        if (filmeJaSalvo) { // Verificando se já existe algum filme salvo na lista. Se tiver, emite o alerta abaixo.
            
            // toast.success('Esse filme já encontra-se na sua lista de filmes salvos!')
            alert('Esse filme já encontra-se na sua lista de filmes salvos!')
            return;
        }

        filmesSalvos.push(filme) // Esse código inclue dentro da lista de array criada lá em cima os filmes não salvos
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos)) // Acessando o item salvo dentro do localStorage e transformando em string com o JSON.stringify
        alert('Filme salvo com sucesso!')
        // toast.success('Filme salvo com sucesso!!!')
    }

    return (
        <div className="container">
            <h1>{filme.title}</h1>
            <img className="img-filme" src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt="poster" />
            <h3>Sinópse: </h3><br />
            <p className="sinopse">{filme.overview}</p> <br />

            <strong className="avaliacao">Avaliação: {filme.vote_average.toFixed(1)} /10</strong>

            <div className="btn" >
                <button onClick={salvarFilme} className="botoes">Salvar</button>
                <button className="botoes"><a target='blank' rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer `}>Trailer</a></button>
            </div>

        </div>
    )
}

export default Filme;