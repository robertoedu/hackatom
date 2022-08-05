// estilos
import styles from '../styles/FormLogin.module.scss';
// componentes
import { Header } from './Header'
import { Button } from './Button';
import { Input } from './Input';
import { registerSchema } from './schema/Register';
import { SetMd5 } from './CheckUser';
// utilitários
import MD5 from 'crypto-js/md5';
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export const Form = () => {

  const navigate = useNavigate();




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

    e.preventDefault();

    if (values.email === "") {
      setShowErrors(true);

    } else if (values.cpf === "") {
      setShowErrors(true);

    } else if (values.cpf === "" && values.email === "") {

      setShowErrors(true);
      }
    else {
      login();

    }
    handleSubmit(e);

  };


  // FUNCAO RESPONSAVEL POR VERIFICAR EMAIL E CPF NA BASE,E REDIRECIONAR PARA A LISTA CRIADA, OU PARA A CRIACAO DE LISTA.

  function login() {
    let cpf = values.cpf;
    let email = values.email;
    let conc = email + cpf;
    let md5 = MD5(conc).toString()


    axios.get("https://api.airtable.com/v0/app6wyVEK4ZQbbAzm/Produtos", {
      headers: {
        'Authorization': 'Bearer key83wTk6Qka7Kibs'
      }
    }).then(api => {
      let ids = api.data.records

      ids.filter(id => {

        if (id.fields.id_usuario === md5) {

          alert('direcionar lista criada')
          SetMd5(md5);
          navigate('/cadastroProduto')
        }
        else {
          alert('criar lista nova')
          SetMd5(md5);
          navigate('/cadastraProduto')

        }

        return true
      })
    })
  }



  // if(md5 === api.userId){

  //   // show list 
  // }else if(md5 === api.userId){
  //   // criar lista e salvar md5
  // }



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
