import { useEffect, useState } from "react";
import api from "../../services/api";

// https://api.themoviedb.org/3/movie/now_playing?api_key=5ac5a91e6ab5fb71ec7aa4d3fdee09c5&language=pt-BR

function Home() {
    const [filmes, useFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "5ac5a91e6ab5fb71ec7aa4d3fdee09c5",
                    language: "pt-BR",
                    page: 1
                }
            });

            console.log(response.data.results);
        }

        loadFilmes();
    }, []);

    return (
        <h1>BEM VINDO A HOME</h1>
    );
} 

export default Home;