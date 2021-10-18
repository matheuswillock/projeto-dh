import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';

import academiaImg from "../../assets/images/academia.svg";
import Register from '../../services/registerService'

export default function FormLogin() {
  const history = useHistory();

  //Redireciona para página após Login com sucesso
  const goLogin = () => history.push('/login');

  const InputField = ({ label, ...props }) => {

    const [field, meta] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{props.labelName}</label>
        <input className={props.className} {...field} {...props} />
        {
          meta.touched && meta.error ? (<div
            className="error">{meta.error}
          </div>)
            : null}
      </>
    );
  };

  return (
    <Formik
      initialValues={
        {
          nome: '',
          sobrenome: '',
          telefone: '',
          email: '',
          github: '',
          data_nascimento: '',
          usuario: '',
          password: '',
          password_confirm: '',
          avatar: '',
          cadastro_sensei: false,
          cadastro_aluno: false,
          especialidade: ''
        }
      }

      validationSchema={
        Yup.object({
          nome: Yup.string()
          .min(2, "Nome é Obrigatório").required('Required')
        ,
        sobrenome: Yup.string()
          .min(2, "Sobrenome é Obrigatório").required('Required')
        ,
        telefone: Yup.string()
          .min(10, "Telefone deve ter 10 ou 11 digitos - 11xxxxxxxx")
          .max(11, "Telefone deve ter no máximo 11 digitos - 119xxxxxxxx"),
        email: Yup.string().required('Required')
          .min(10, "Informe e-mail Válido")
        ,
        github: Yup.string().min(8, "Link do GitHub - Opcional"),
        data_nascimento: Yup.string()
          .min(10, "Data deve ser no formato - DD/MM/AAAA")
        ,
        usuario: Yup.string().required('Required')
          .min(6, "Nome de usuário deve ter no mínimo 6 digitos")
          .max(8, "Nome de usuário deve ter no máximo 10 digitos")
        ,
        password: Yup.string().required('Required')
          .min(8, "Senha de usuário deve ter no mínimo 8 digitos")
          .max(16, "Senha de usuário deve ter no máximo 16 digitos")
        , 
        password_confirm: Yup.string().required('Required')
        .min(8, "Senha de usuário deve ter no mínimo 8 digitos")
        .max(16, "Senha de usuário deve ter no máximo 16 digitos")
        , 
        avatar: Yup.string(),
        especialidade: Yup.string().required('Required')
          .max(30, "Informe sua especialidade com até 30 posições")
          .min(5, "Informe sua especialidade com no mínimo 5 posições")
        })
      }

      onSubmit={
        async (values, { setSubmitting }) => {
                 console.log(values)
          try {
              const recover = await Register.registerUsuarios(values);
              alert(`${recover} Cadastrado com Sucesso`)            
               
              //goLogin();
            
            setSubmitting(false);
          } catch (error) {
            alert(`Valide seu Usuário Ou e-mail informado pois Algo de errado`)
            console.log(`Algo deu errado no envio dos dados para Login ${error}`)
          }
        }
      }
    >
      <Form >
        <div className="form">
        <span>Cadastre-se na academia</span>
          <img src={academiaImg} alt="Academia Ninja" />
          <div className="input-field">
          <InputField
              id="input-field-nome"
              name="nome"
              type="text"
              placeholder="Informe seu nome pessoal"
            />

            <InputField
              id="input-field-sobrenome"
              name="sobrenome"
              type="text"
              placeholder="Informe seu sobrenome pessoal"
            />

            <InputField
              id="input-field-telefone"
              name="telefone"
              type="tel"
              placeholder="Informe seu telefone pessoal"
            />

            <InputField
              id="input-field-email"
              name="email"
              type="email"
              placeholder="Informe seu email pessoal"
            />

            <InputField
              id="input-field-github"
              name="github"
              type="url"
              placeholder="Informe o link do seu github"
            />

            <InputField
              id="input-field-date-birth"
              name="data_nascimento"
              type="date"
              placeholder="Data de nascimento"
            />

            <InputField
              id="input-field-usuario"
              name="usuario"
              type="text"
              placeholder="Nome para Login"
            />

            <InputField
              id="input-field-password"
              name="password"
              type="password"
              placeholder="Digite uma senha"
            />

            <InputField
              id="input-field-password-confirm"
              name="password_confirm"
              type="password"
              placeholder="Confirme a senha"
            />

            <InputField
              id="input-field-avatar"
              name="avatar"
              type="text"
              placeholder="Selecione seu Avatar"
            />
            
            <label for="Aluno">Aluno</label>
            <InputField 
              id="input-field-cadastro-aluno"
              name="cadastro_aluno"
              type="checkbox"
              placeholder="Selecione para Cadastro Aluno"
            />
            <label for="Aluno">Sensei</label>
            <InputField 
              id="input-field-cadastro-sensei"
              name="cadastro_sensei"
              type="checkbox"
              placeholder="Selecione para Cadastro Sensei"
            />

            <InputField
              id="input-field-especialidade"
              name="especialidade"
              type="text"
              placeholder="Seu sua especialidade de Sensei"
            />
          </div>
          <button className="btn-submit" type="submit">Cadastrar</button>
        </div>
      </Form>
    </Formik>
  );
}