import styles from "./Container.module.css";

let Container = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>;
};

export default Container;
