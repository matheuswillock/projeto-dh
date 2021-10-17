import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';

import academiaImg from "../../assets/images/academia.svg";
import forgotService from "../../services/forgotPasswordService";

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
          usuario: '',
          email_pessoa: '',
        }
      }

      validationSchema={
        Yup.object({
          usuario: Yup.string()
            .min(6, 'Usuário precisa de 6 caracteres ou mais!')
          ,
          email_pessoa: Yup.string()
            .max(40, 'email indevida!')
            .min(6, 'email indevida!')
          ,
        })
      }

      onSubmit={
        async (values, { setSubmitting }) => {
          try {
            const recover = await forgotService.recoverPassword(values);
            
            if (JSON.parse(recover).RecuperaSenhaSensei.status === true || JSON.parse(recover).RecuperaSenhaAluno.status === true) {
              alert(`Usuário e senha enviado para o e-mail cadastrado ;)`)
              goLogin();
            }
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
          <span>
            Recupere sua Senha de usuário para Continuar a Jornada
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
              id="input-field-email"
              name="email_pessoa"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </div>
          <button className="btn-submit" type="submit">Recuperar</button>
        </div>
      </Form>
    </Formik>
  );
}