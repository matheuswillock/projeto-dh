import React from 'react';
import { Formik, Form, useField, Field} from "formik";
import * as Yup from 'yup';

import academiaImg from "../../assets/images/academia.svg";

// Import imgs perfil
import BorutoPerfil from "../../assets/images/Perfil-image/boruto-uzumaki.svg"
import HinataPerfil from "../../assets/images/Perfil-image/hinata-hyuga.svg";
import kakashiPerfil from "../../assets/images/Perfil-image/kakashi-hatake.svg";
import NarutoPerfil from "../../assets/images/Perfil-image/naruto-uzumaki.svg";
import ObitoPerfil from "../../assets/images/Perfil-image/obito-uchiha.svg";
import SaradaPerfil from "../../assets/images/Perfil-image/sarada-uchiha.svg";
import TsunadePerfil from "../../assets/images/Perfil-image/tsunade.svg";

export default function RegisterForm() {

  const InputField = ({ label, ...props }) => {

    // useField () retorna [formik.getFieldProps (), formik.getFieldMeta ()]
    // que podemos espalhar em <input>. Podemos usar o campo meta para mostrar um erro
    // mensagem se o campo é inválido e foi tocado (ou seja, visitado)
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
      // Observe que temos que inicializar TODOS os campos com valores. Esses
      // pode vir de adereços, mas como não queremos preencher previamente este formulário,
      // usamos apenas uma string vazia. Se não fizermos isso, React vai gritar
      // para nós.
      initialValues={
        {
          nome_pessoa: '',
          sobrenome_pessoa: '',
          telefone_pessoa: '',
          email_pessoa: '',
          github: '',
          data_nascimento_pessoa: '',
          usuario: '',
          password: '',
          
          especialidade: '',

          avatar: '',

          ocupacao: '',
        }
      }

      validationSchema={

        Yup.object({
          nome_pessoa: Yup.string()
            .min(2, 'Nome é Obrigatório')
            .required('Qual o seu nome?')
          ,
          sobrenome_pessoa: Yup.string()
            .min(2, 'Sobrenome é Obrigatório')
            .required('Qual o seu sobrenome?')
          ,
          telefone_pessoa: Yup.string()
            .min(10, 'Telefone deve ter 10 ou 11 digitos - 11xxxxxxxx')
            .max(11, 'Telefone deve ter no máximo 11 digitos - 119xxxxxxxx')
            .required('Informe o seu telefone')
          ,
          email_pessoa: Yup.string()
            .required('Required')
            .email('Email inválido')
          ,
          github: Yup.string()
            .min(8, 'Link do GitHub - Opcional')
          ,
          data_nascimento_pessoa: Yup.date()
            .min(10, 'Data deve ser no formato - DD/MM/AAAA')
            .required('informe a sua data de nascimento')
          ,
          usuario: Yup.string()
            .min(6, 'Nome de usuário deve ter no mínimo 6 digitos')
            .max(8, 'Nome de usuário deve ter no máximo 10 digitos')
            .required('Informe a senha')
          ,
          password: Yup.string()
            .min(8, 'Senha de usuário deve ter no mínimo 8 digitos')
            .max(16, 'Senha de usuário deve ter no máximo 16 digitos')
            .required('Informe a senha')
          ,          
          especialidade: Yup.string()
            .max(30, 'Informe sua especialidade com até 30 posições')
            .min(5, 'Informe sua especialidade com no mínimo 5 posições')
            .required('Diga-nos a sua especialidade')
          ,
          avatar: Yup.string()
            .required('Escolha um Avatar')
          ,
          ocupacao: Yup.string()
            .required('Diga-nos se você é Sensei ou Aluno')
          ,

        })
      }

      onSubmit={
        (values, { setSubmitting }) => {
          console.log(JSON.stringify(values));
          setTimeout(() => {
           console.log(JSON.stringify(values));
            setSubmitting(false);
          }, 500);

        }
      }

    >

      <Form  method="post" action="/login" >

        <div className="form">

          <span>
            Cadastre-se na academia
          </span>

          <img src={academiaImg} alt="Academia Ninja" />

          <div className="input-field">
            <InputField
              id="input-field-nome_pessoa"
              name="nome_pessoa"
              type="text"
              placeholder="Informe seu nome pessoal"
            />

            <InputField
              id="input-field-sobrenome_pessoa"
              name="sobrenome_pessoa"
              type="text"
              placeholder="Informe seu sobrenome pessoal"
            />

            <InputField
              id="input-field-telefone_pessoa"
              name="telefone_pessoa"
              type="text"
              placeholder="Informe seu telefone pessoal"
            />

            <InputField
              id="input-field-email_pessoa"
              name="email_pessoa"
              type="email"
              placeholder="Informe seu email pessoal"
            />

            <InputField
              id="input-field-github_pessoa"
              name="github_pessoa"
              type="text"
              placeholder="Informe o link do seu github"
            />

            <InputField
              id="input-field-date-birth"
              name="date-birth"
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
              id="input-field-password"
              name="password_confirm"
              type="password"
              placeholder="Confirme a senha"
            />

            <InputField
              id="input-field-especialidade"
              name="especialidade"
              type="text"
              placeholder="Seu/sua especialidade de Sensei"
            />

            <h2 className="radio-h2">Você será ...</h2>
            <div role="group" aria-labelledby="my-radio-group" className="toggle-radio">

              <label className="radio-label">
                <Field type="radio" name="avatar" value="sensei" />
                Sensei
              </label>

              <label className="radio-label">
                <Field type="radio" name="avatar" value="aluno" />
                Aluno
              </label>
            </div>
        
            <h2 className="radio-h2">Selecione o seu avatar</h2>
          
            <div role="group" aria-labelledby="my-radio-group" className="radio-group">

              <label className="radio-label">
                <Field type="radio" name="avatar" value="../../assets/images/Perfil-image/boruto-uzumaki.svg" />
                <img className="radio-img" src={BorutoPerfil} />
              </label>

              <label className="radio-label">
                <Field type="radio" name="avatar" value="../../assets/images/Perfil-image/hinata-hyuga.svg" />
                <img className="radio-img" src={HinataPerfil} />
              </label>

              <label className="radio-label">
                <Field type="radio" name="avatar" value="../../assets/images/Perfil-image/tsunade.svg" />
                <img className="radio-img" src={TsunadePerfil} />
              </label>

              <label className="radio-label">
                <Field type="radio" name="avatar" value="../../assets/images/Perfil-image/sarada-uchiha.svg" />
                <img className="radio-img" src={SaradaPerfil} />
              </label>

              <label className="radio-label">
                <Field type="radio" name="avatar" value="../../assets/images/Perfil-image/obito-uchiha.svg" />
                <img className="radio-img" src={ObitoPerfil} />
              </label>

              <label className="radio-label">
                <Field type="radio" name="avatar" value="../../assets/images/Perfil-image/naruto-uzumaki.svg" />
                <img className="radio-img" src={NarutoPerfil} />
              </label>

              <label className="radio-label">
                <Field type="radio" name="avatar" value="../../assets/images/Perfil-image/kakashi-hatake.svg" />
                <img className="radio-img" src={kakashiPerfil} />
              </label>
              
              
            </div>


          </div>
            
          

            

          <button className="btn-submit" type="submit">Cadastrar-se</button>

        </div>

      </Form>

    </Formik>
  );
}