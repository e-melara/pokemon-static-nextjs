import axios from "axios";

const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2'
})

pokemonApi.interceptors.response.use(function(response) { return response.data })

export default pokemonApi
