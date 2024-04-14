import { useDispatch } from "react-redux";

const Controllers = () => {
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  const addHandler = () => {
    dispatch({
      type: "ADD",
      payload: { value: 5 },
    });
  };

  const subHandler = () => {
    dispatch({
      type: "SUB",
      payload: { value: 5 },
    });
  };
  const resetHandler = () => {
    dispatch({
      type: "RESET",
    });
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
