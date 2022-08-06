// estilos
import styles from '../styles/InputLogin.module.scss';
// utilitários
import InputMask from 'react-input-mask';

export const Input = ({
  name,
  error = '',
  value,
  label = '',
  type = '',
  onChange,
  typeMask,
}) => {
  return (
    <>
      <label className={styles.bgLabel}>
        <InputMask
          mask={typeMask}
          placeholder={label}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
        />
      </label>
      {error && <span>{error}</span>}
    </>
  );
};
