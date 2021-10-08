// Importanto o axios
import axios from "axios";

// Criando a var axios constando a url base;
const api = axios.create({
  baseUrl: "http://api.github.com/"
})

// Exportando a api
export default api;