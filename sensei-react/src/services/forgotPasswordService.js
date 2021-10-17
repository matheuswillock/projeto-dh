import axios from "axios";

// Definindo a base do url para os endpoints
const apiLogin = axios.create({
  baseUrl: "http://localhost:3010/",
});

const recoverPassword = {
  // Definindo a função de login
  async recoverPassword(data) {
      let parametroUsuario = '';
      if(data.usuario) {
        parametroUsuario = { usuario: data.usuario };
      } else {
        parametroUsuario = { email_pessoa: data.email_pessoa };
      }
      
    let token = await apiLogin.get(`/login/remember/password`, { params: parametroUsuario }).then((res) => {
        return JSON.stringify(res.data);
    })
    return token
  }
}

export default recoverPassword;