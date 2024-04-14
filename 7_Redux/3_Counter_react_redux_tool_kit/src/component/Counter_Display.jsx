import { useSelector } from "react-redux";

const Counter_Display = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Initial counter value {counterVal}</p>;
};

export default Counter_Display;
