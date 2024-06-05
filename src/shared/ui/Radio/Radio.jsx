import styles from './Radio.module.css';

const Radio = ({ name, checked, onChange, className, value }) => {
  return (
    <input
      className={`${styles._} ${className}`}
      name={name}
      value={value}
      type="radio"
      checked={checked}
      onChange={onChange}
    />
  );
}

export default Radio;
