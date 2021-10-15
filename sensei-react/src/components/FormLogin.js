import React from 'react';
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';

import academiaImg from "../assets/images/academia.svg";

import authService from "../services/loginservice";

require('dotenv').config();

export default function FormLogin() {

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
          usuario: '',
          password: '',
        }
      }

      validationSchema={
        Yup.object({
          usuario: Yup.string()
            .min(4, 'Usuário precisa de 4 caracteres ou mais!')
            .required('Required')
          ,
          password: Yup.string()
            .max(12, 'Senha indevida!')
            .min(6, 'Senha indevida!')
            .required('Required')
          ,
        })
      }

      onSubmit={
        (values, { setSubmitting }) => {
          const auth = authService.authenticate(values, null, 2)

          auth.then((res) => {
            console.log(res)
          })
          setSubmitting(false);
          /* setTimeout(() => {
             
             setSubmitting(false);
           }, 500);
           */
        }
      }
    >

      <Form >
        <div className="form">
          <span>
            Entre na academia
          </span>
          <img src={academiaImg} alt="Academia Ninja" />
          <div className="input-field">
            <InputField
              id="input-field-usuario"
              name="usuario"
              type="text"
              placeholder="Ninja"
            />
            <InputField
              id="input-field-password"
              name="password"
              type="password"
              placeholder="Digite uma senha"
            />
          </div>
          <button className="btn-submit" type="submit">Entrar</button>
        </div>
      </Form>
    </Formik>
  );
}