// componentes
import { Button } from './Button';
import { Input } from './Input';
import { registerSchema } from './schema/Register';
// utilitários
import { useFormik } from 'formik';
import { useState } from 'react';
// import Airtable from 'airtable';
import "../styles/FormLogin.module.scss"
import "../styles/FormLogin.module.css"
import axios from 'axios'; 




export const Form = () => {

  axios.get('https://api.airtable.com/v0/app6wyVEK4ZQbbAzm/usuarios?maxRecords=3&view=Grid%20view',
  {
    headers: {
        'Authorization': 'Bearer key83wTk6Qka7Kibs'
    }
}).then(resp => {
  console.log(resp.data.records)

  let usersList = resp.data.records

  usersList.filter(ids => {
    console.log("cpf :" + ids.fields.cpf)
    console.log("emails :" + ids.fields.email)
    console.log("ids :"+ ids.id)

    return true
  })

})
    // const [users, setUsers] = useState([])

    // base('usuarios')
    //     .select({ view: 'Grid view' })
    //     .eachPage((records, fetchNextPage) => {
    //     setUsers(records)  
    //     fetchNextPage();        
    //     });

        

        
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

    // console.log(users)

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
