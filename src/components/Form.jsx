// estilos
import styles from '../styles/FormLogin.module.scss';
// componentes
import { Header } from './Header'
import { Button } from './Button';
import { Input } from './Input';
import { registerSchema } from './schema/Register';
// utilitários
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';

// import sha256 from 'crypto-js/sha256';
// import hmacSHA512 from 'crypto-js/hmac-sha512';
// import Base64 from 'crypto-js/enc-base64';

export const Form = () => {
  axios
    .get(
      'https://api.airtable.com/v0/app6wyVEK4ZQbbAzm/usuarios?maxRecords=3&view=Grid%20view',
      {
        headers: {
          Authorization: 'Bearer key83wTk6Qka7Kibs',
        },
      },
    )
    .then((resp) => {
      console.log(resp.data.records);

      let usersList = resp.data.records;

      usersList.filter((ids) => {
        /*  console.log('cpf :' + ids.fields.cpf);
        console.log('emails :' + ids.fields.email);
        console.log('ids :' + ids.id);
 */
        return true;
      });
    });
  // const [users, setUsers] = useState([])

  // base('usuarios')
  //     .select({ view: 'Grid view' })
  //     .eachPage((records, fetchNextPage) => {
  //     setUsers(records)
  //     fetchNextPage();
  //     });

  const md5 = require('crypto-js/md5');

  // let message, nonce, path, privateKey;
  // const hashDigest = sha256(nonce + message);
  // const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));

  axios
    .get(
      'https://api.airtable.com/v0/app6wyVEK4ZQbbAzm/usuarios?maxRecords=3&view=Grid%20view',
      {
        headers: {
          Authorization: 'Bearer key83wTk6Qka7Kibs',
        },
      },
    )
    .then((resp) => {
      const usersList = resp.data.records;

      usersList.filter((ids) => {
        // console.log("cpf :" + ids.fields.cpf)
        // console.log("emails :" + ids.fields.email)
        // console.log("ids :"+ ids.id)

        return true;
      });
    })
    .catch((err) => console.log('erro' + err));

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

  /*   function login() {
    alert('logou no sistema');
  } */
  function login() {
    // console.log(users)

    alert('logou no sistema');
    let senha = values.cpf;
    let email = values.email;

    let cpfMd5 = md5(senha, 'hex');
    let emailMd5 = md5(email, 'hex');
    alert('logou no sistema');

    console.log(senha);
    console.log(cpfMd5);
    console.log(emailMd5);
    console.log(email);
  }

  return (

    <>
      <Header />
      <form className={styles.bgForm} onSubmit={onSubmit}>
        <h1>Login</h1>
        <div className={styles.bgInputs}>
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
            type="text"
            onChange={handleChange}
            error={showErrors ? errors.cpf : ''}
          />
          <div className={styles.bgButton}>
            <Button type="submit">Entrar</Button>
          </div>
        </div>
      </form>
    </>
  );
};
