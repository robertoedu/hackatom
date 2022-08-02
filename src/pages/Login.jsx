// styles
import styles from '../styles/Login.module.scss';
// components
import { CampoForm } from '../components/CampoForm';
import { useState } from 'react';

export const Login = () => {
  return (
    <>
      <section>
        <div className={styles.bgCampos}>
          <CampoForm />
        </div>
      </section>
    </>
  );
};
