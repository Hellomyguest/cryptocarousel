
import styles from './ControlWithLabel.module.css';

const ControlWithLabel = ({ control, label, name, className, onClick }) => {
  return (
    <label
      className={`${styles.label} ${className}`}
      name={name}
      onClick={onClick}
    >
      {control}
      {label && <span className={styles.checkbox__text}>{label}</span>}
    </label>
  );
}

export default ControlWithLabel;