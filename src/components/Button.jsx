import styles from '../styles/ButtonLogin.module.scss';

export const Button = ({ children, type }) => {
  return (
    <button className={styles.bgButton} type={type}>
      {children}
    </button>
  );
};
