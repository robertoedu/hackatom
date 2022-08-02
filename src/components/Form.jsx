import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { registerSchema } from './schema/Register';

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
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
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
          onChange={handleChange}
          error={showErrors ? errors.cpf : ''}
        />
        <Button type="submit">Entrar</Button>
      </div>
    </form>
  );
};
