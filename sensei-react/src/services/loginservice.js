import axios from "axios";

// Definindo a base do url para os endpoints
const apiLogin = axios.create({
  baseUrl: "http://localhost:3010/",
});

const authService = {
  // Definindo a função de login
  async authenticate(data) {
    let token = await apiLogin.post(`/login/sign/aluno`, data).then((res) => {
      console.log(res.data);
      return JSON.stringify(res.data);
    })/*.catch ((error) => {
      console.error(`ops! ocorreu um erro: ${error}`);
      return {auth: 401};
    });*/
    return token
  },

  validateToken(token) {
    apiLogin.interceptors.request.use(async config => {
      if (token) {
        apiLogin.defaults.headers.authorization = token;
      }

      return config;
    })
  },

  // Função para salar o usuário logado no session storage
  setLoggedUser(token) {
    sessionStorage.setItem(`TOKEN_KEY_SENSEI`, token);
  },

  // Função responsável por recuperar o usuário logado do session storage
  getLoggedUser() {
    let data = sessionStorage.getItem(`TOKEN_KEY_SENSEI`);
    if (!data) return null;
    try {
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  isAuthenticated() {
    if (sessionStorage.getItem(`TOKEN_KEY_SENSEI`) !== null) {
      return true
    }
    else return false
  }
};

export default authService;
