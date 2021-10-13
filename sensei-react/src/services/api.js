// Importanto o axios
import axios from "axios";

// Criando a var axios constando a url base;
const api = axios.create({
  baseUrl: "https://api.github.com/users/"
})

// Exportando a api
export default api;