// estilos
import styles from '../styles/FormLogin.module.scss';
// componentes
import { Header } from './Header';
import { Button } from './Button';
import { Input } from './Input';
import { registerSchema } from './schema/Register';
import { SetMd5 } from './CheckUser';
// utilitários
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useFormik } from 'formik';
// import axios from 'axios';
import MD5 from 'crypto-js/md5';
import api from '../api/AirtableGET';



export const Form = () => {
  const [showErrors, setShowErrors] = useState(false);
  const navigate = useNavigate();

  const { values, errors, handleChange, handleSubmit } = useFormik({
    validationSchema: registerSchema,
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      email: '',
      cpf: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(values);
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const regEmail = values.email.replace(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    );

    if (values.email === '' || values.email !== regEmail) {
      setShowErrors(true);
      return;
    } else if (values.cpf === '') {
      setShowErrors(true);
    } else if (values.cpf === '' && values.email === '') {
      setShowErrors(true);
    } else {
      login();
    }
    handleSubmit(e);
  };

  // FUNCAO RESPONSAVEL POR VERIFICAR EMAIL E CPF NA BASE,E REDIRECIONAR PARA A LISTA CRIADA, OU PARA A CRIACAO DE LISTA.
  function login() {
    let cpf = values.cpf;
    let email = values.email;
    let conc = email + cpf;
    let md5 = MD5(conc).toString();

    // axios
    //   .get('https://api.airtable.com/v0/app6wyVEK4ZQbbAzm/Produtos', {
    //     headers: {
    //       Authorization: 'Bearer key83wTk6Qka7Kibs',
    //     },
    //   })

      api.get("/Produtos").then(api => {
        let ids = api.data.records;

        ids.filter((id) => {

          // Compara os Ids, se o Cliente Ja existir direciona para a lista ja criada.
          //Se o id(md5) nao existir, Salva o Id(localStorage), e direciona para criar a lista
          if (id.fields.id_usuario === md5) {
            alert('direcionar lista criada');
            SetMd5(md5);
            navigate('/produtos');
          } else {
            alert('criar lista nova');
            SetMd5(md5);
            navigate('/produtos');
          }
          console.log("md5: " + md5)

          return true;
        });
      });
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
            /*  typeMask="999.999.999-99" */
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
