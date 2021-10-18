import axios from "axios";

// Definindo a base do url para os endpoints
const apiLogin = axios.create({
  baseUrl: "http://localhost:3010/",
});

const Register = {
  // Definindo a função de login
  async registerUsuarios(req, res) {
    let {
      nome,
      sobrenome,
      telefone,
      email,
      github,
      data_nascimento,
      usuario,
      password,
      password_confirm,
      avatar,
      especialidade = "",
      classificacao = 0,
      FKIdPessoaIdPessoa = "",
    } = req;

    const dadosPessoa = {
      nome,
      sobrenome,
      telefone,
      email,
      github,
      data_nascimento,
    };

    if (req.cadastro_sensei) {
    const dadosSensei = {
      FKIdPessoaIdPessoa,
      usuario,
      password,
      password_confirm,
      avatar,
      especialidade,
    };

    const cadastroSensei = await this.registerSensei({
      pessoa: dadosPessoa,
      sensei: dadosSensei,
    });

    return cadastroSensei;
  }

    if (req.cadastro_aluno) {
      const dadosAluno = {
        FKIdPessoaIdPessoa,
        usuario,
        password,
        password_confirm,
        avatar,
        especialidade,
        classificacao,
      };

      const cadastroAluno = await this.registerAluno({
        pessoa: dadosPessoa,
        aluno: dadosAluno,
      });

      return cadastroAluno;
    }
  },

  async registerAluno(data) {
    let register = await apiLogin.post(`/aluno/cadastrar`, data).then((res) => {
      return JSON.stringify(res.data);
    });
    return register;
  },

  async registerSensei(data) {
    let register = await apiLogin.post(`/sensei/cadastrar`, data).then((res) => {
      return JSON.stringify(res.data);
    });
    return register;
  },
};

export default Register;
