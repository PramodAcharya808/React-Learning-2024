import { useSelector } from "react-redux";

const Counter_Display = () => {
  const counter = useSelector((state) => state.count);
  return <p className="lead mb-4">Initial counter value {counter}</p>;
};

export default Counter_Display;
