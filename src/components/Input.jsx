import styles from '../styles/InputLogin.module.scss';

export const Input = ({
  name,
  error = '',
  value,
  label = '',
  type = '',
  onChange,
}) => {
  return (
    <>
      <label className={styles.bgLabel}>
        {label}
        <input name={name} value={value} type={type} onChange={onChange} />
      </label>
      {error && <span>{error}</span>}
    </>
  );
};
