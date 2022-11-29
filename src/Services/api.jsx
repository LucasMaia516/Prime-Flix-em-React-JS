
//BASE DA URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=261deb0f618d599f8b3fdc1ea83f4972&language=pt-BR

import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
})

export default api;