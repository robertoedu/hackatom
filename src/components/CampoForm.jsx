// styles
import styles from '../styles/CampoForm.module.scss';
// utilities
import { Formik } from 'formik';

export const CampoForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          cpf: '',
        }}
      >
        {({values, handleChange}) => (
        <form>
          <div>
            <label>Email</label>
            <input
              name="email"
              type="text"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CPF</label>
            <input
              name="cpf"
              type="text"
              value={values.cpf}
              onChange={handleChange}
            />
          </div>
        </form>}
        )
      </Formik>
    </>
  );
};
