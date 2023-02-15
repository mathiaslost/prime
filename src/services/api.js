import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da api: https://api.themoviedb.org/3/movie/now_playing?api_key=5ac5a91e6ab5fb71ec7aa4d3fdee09c5&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;