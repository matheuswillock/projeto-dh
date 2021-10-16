import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';

import academiaImg from "../assets/images/academia.svg";
import authService from "../services/loginservice";

require('dotenv').config();

export default function FormLogin() {
  const history = useHistory();

  //Redireciona para página após Login com sucesso
  const goLogin = () => history.push('/viewclasses');

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
        async (values, { setSubmitting }) => {
          try {
            const auth = await authService.authenticate(values)
            
            if (JSON.parse(auth).auth === true) {
              authService.setLoggedUser(JSON.parse(auth).token);
              goLogin();
            }
            setSubmitting(false);
          } catch (error) {
            alert(`Valide seu Usuário e Senha pois algo deu errado`)
            console.log(`Algo deu errado no envio dos dados para Login ${error}`)
          }
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