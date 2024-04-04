import styles from "./Input.module.css";

let Input = ({ handleOnKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter some data"
      className={`${styles.inputArea}`}
      onKeyDown={handleOnKeyDown}
    />
  );
};
export default Input;
