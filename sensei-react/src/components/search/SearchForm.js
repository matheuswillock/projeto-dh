import React from 'react';
import { Formik, Form, useField } from 'formik';

export default function SearchForm() {

  const InputField = ({ label, ...props }) => {
    // useField () retorna [formik.getFieldProps (), formik.getFieldMeta ()]
    // que podemos espalhar em <input>. Podemos usar o campo meta para mostrar um erro
    // mensagem se o campo é inválido e foi tocado (ou seja, visitado)
    const [field] = useField(props);
    return (
      <>
        <label htmlFor={props.id || props.name}>{props.labelName}</label>
        <input className={props.className} {...field} {...props} />
      </>
    );
  };

  const SelectInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div>
        <label htmlFor={props.id || props.name}>{props.labelName}</label>
        <select {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    );
  };

  return(
    <Formik
      // Observe que temos que inicializar TODOS os campos com valores. Esses
      // pode vir de adereços, mas como não queremos preencher previamente este formulário,
      // usamos apenas uma string vazia. Se não fizermos isso, React vai gritar
      // para nós.
      initialValues={
        { nameSensei: '', 
          subject: '', 
        }
      }

      onSubmit={
        (values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }
      }

    >
      
      <Form >
        <div id="search-senseis">
          
          <div className="input-block">

            <InputField
              labelName="Nome do sensei"
              id="nameSensei"
              name="nameSensei"
              type="text"
              placeholder="Busque um Sensei"
            />
            
          </div>

          <div className="select-block">

            <SelectInput labelName="Matéria" name="subject" id="subject">
              <option value="" disabled="">Selecione</option>
              <option value="1">Programação</option>
              <option value="2">Biologia</option>
              <option value="3">Ciências</option>
              <option value="4">Educação Física</option>
              <option value="5">Física</option>
              <option value="6">Geografia</option>
              <option value="7">História</option>
              <option value="8">Matemática</option>
              <option value="9">Português</option>
              <option value="10">Química</option>
              <option value="11">Artes</option>
            </SelectInput>

          </div>

          <button type="submit">
            Buscar
          </button>
          
        </div>

      </Form>

    </Formik>
  );
}