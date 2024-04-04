import { useContext } from "react";
import styles from "./ListItems.module.css";
import { TodoListContext } from "../store/Todo_list.store";

let ListItems = () => {

  const {deteleBtnHandler} = useContext(TodoListContext);
  const {todoListData} = useContext(TodoListContext);
  
  return (
    <>
      {todoListData.map((items) => (
        <>
          <div key="52" className="col-6 my-2">
            <div className={`${styles.input}`}>
              <p>{items.task}</p>
            </div>
          </div>
          <div key="32" className="col-3 my-2">
            <div className={`${styles.input}`}>
              <p>{items.date}</p>
            </div>
          </div>
          <div key="12" className="col-3 my-2">
            <button
              className={`${styles.delBtn}`}
              onClick={() => deteleBtnHandler(items.task)}
            >
              Delete
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default ListItems;
