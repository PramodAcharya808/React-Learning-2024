import { useDispatch } from "react-redux";
import { counterActions } from "../redux/counterSlice";

const Controllers = () => {
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const addHandler = () => {
    dispatch(counterActions.add());
  };

  const subHandler = () => {
    dispatch(counterActions.sub());
  };
  const resetHandler = () => {
    dispatch(counterActions.reset());
  };

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-outline-secondary btn-lg px-4"
        onClick={addHandler}
      >
        +5
      </button>
      <button
        type="button"
        className="btn btn-primary btn-lg px-4 gap-3"
        onClick={incrementHandler}
      >
        +1
      </button>
      <button
        type="button"
        className="btn btn-success btn-lg px-4"
        onClick={decrementHandler}
      >
        -1
      </button>
      <button
        type="button"
        className="btn btn-outline-secondary btn-lg px-4"
        onClick={subHandler}
      >
        -5
      </button>
      <button
        type="button"
        className="btn btn-danger btn-lg px-4"
        onClick={resetHandler}
      >
        Reset
      </button>
    </div>
  );
};

export default Controllers;
