// estilos
import styles from '../styles/InputLogin.module.scss';

export const Input = ({
  name,
  error,
  value,
  label,
  type,
  onChange,
  maxLength,
  onKeyUp,
}) => {
  return (
    <>
      <label className={styles.bgLabel}>
        <input
          placeholder={label}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          maxLength={maxLength}
          onKeyUp={onKeyUp}
        />
      </label>
      {error && <span>{error}</span>}
    </>
  );
};
