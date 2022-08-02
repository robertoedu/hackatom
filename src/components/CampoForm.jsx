import styles from '../styles/CampoForm.module.scss';

export const CampoForm = ({ nameEmail, nameCPF, typeEmail, typeCPF }) => {
  return (
    <div className={styles.bgCampos}>
      <label htmlFor={typeEmail}>{nameEmail}</label>
      <input type="text" name={typeEmail} id={typeEmail} />
      <label htmlFor={typeCPF}>{nameCPF}</label>
      <input type="text" name={typeCPF} id={typeCPF} />
    </div>
  );
};
