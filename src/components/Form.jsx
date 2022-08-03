// componentes
import { Button } from './Button';
import { Input } from './Input';
import { registerSchema } from './schema/Register';
// utilitários
import { useFormik } from 'formik';
import { useState } from 'react';
import "../styles/FormLogin.module.scss"
import "../styles/FormLogin.module.css"



export const Form = () => {
  const [showErrors, setShowErrors] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      cpf: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onSubmit = (e) => {
    setShowErrors(true);
    handleSubmit(e);
    login();
  };

  // FUNCAO RESPONSAVEL POR VERIFICAR EMAIL E CPF NA BASE,E REDIRECIONAR PARA A LISTA CRIADA, OU PARA A CRIACAO DE LISTA.

  function login() {

    alert("logou no sistema")
  }

  return (

    
    <form onSubmit={onSubmit}>
      <h1 id='teste'>Login</h1>
      <div>
        <Input 
          name="email"
          value={values.email}
          label="Email"
          onChange={handleChange}
          error={showErrors ? errors.email : ''}
        />
        <Input
          name="cpf"
          value={values.cpf}
          label="CPF"
          type="number"
          onChange={handleChange}
          error={showErrors ? errors.cpf : ''}
        />
        <Button type="submit">Entrar</Button>
      </div>
    </form>
  );
};
