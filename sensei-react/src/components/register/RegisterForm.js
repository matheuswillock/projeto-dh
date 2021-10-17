import React from 'react';
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';

import academiaImg from "../../assets/images/academia.svg";

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
          avatar: '',
          especialidade: ''
        }
      }

      validationSchema={

        Yup.object({
          nome_pessoa: Yup.string()
            .min(2, 'Nome é Obrigatório')
            .required('Required')
          ,
          sobrenome_pessoa: Yup.string()
            .min(2, 'Sobrenome é Obrigatório')
            .required('Required')
          ,
          telefone_pessoa: Yup.string()
            .min(10, 'Telefone deve ter 10 ou 11 digitos - 11xxxxxxxx')
            .max(11, 'Telefone deve ter no máximo 11 digitos - 119xxxxxxxx')
          ,
          email_pessoa: Yup.string()
            .min(10, 'Informe e-mail Válido')
            .required('Required')
          ,
          github: Yup.string()
            .min(8, 'Link do GitHub - Opcional')
          ,
          data_nascimento_pessoa: Yup.string()
            .min(10, 'Data deve ser no formato - DD/MM/AAAA')
            .required('Required')
          ,
          usuario: Yup.string()
            .min(6, 'Nome de usuário deve ter no mínimo 6 digitos')
            .max(8, 'Nome de usuário deve ter no máximo 10 digitos')
            .required('Required')
          ,
          password: Yup.string()
            .min(8, 'Senha de usuário deve ter no mínimo 8 digitos')
            .max(16, 'Senha de usuário deve ter no máximo 16 digitos')
            .required('Required')
          ,
          avatar: Yup.string()
            .required('Required')
          ,
          especialidade: Yup.string()
            .max(30, 'Informe sua especialidade com até 30 posições')
            .min(5, 'Informe sua especialidade com no mínimo 5 posições')
            .required('Required')
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

      <Form >

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
              type="text"
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
              id="input-field-avatar"
              name="avatar"
              type="comboBox"
              placeholder="Selecione seu Avatar"
            />

            <InputField
              id="input-field-especialidade"
              name="especialidade"
              type="text"
              placeholder="Seu sua especialidade de Sensei"
            />


          </div>

          <button className="btn-submit" type="submit">Cadastrar-se</button>

        </div>

      </Form>

    </Formik>
  );
}