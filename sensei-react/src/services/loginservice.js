import axios from "axios";

// Definindo a base do url para os endpoints
const apiLogin = axios.create({
  baseUrl: "http://localhost:3010/",
});

const authService = {
  // Definindo a função de login
  async authenticate(data) {
    await apiLogin.post(`/login/sign/aluno`, data).then((res) => {
      if(res.status === 200){
        return res.data;
      } else return false
    });
  },

  // Função para salar o usuário logado no local storage
  setLoggedUser(data) {
    let parsedData = JSON.stringify(data);
    localStorage.setItem("user", parsedData);
  },

  // Função responsável por recuperar o usuário logado do local storage
  getLoggedUser() {
    let data = localStorage.getItem("user");
    if (!data) return null;
    try {
      let parsedData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default authService;
