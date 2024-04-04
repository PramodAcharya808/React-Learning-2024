import "../node_modules/bootstrap/dist/css/bootstrap.css";
import styles from "./App.module.css";
import AddTodo from "./components/AddTodo.jsx";
import Heading from "./components/Heading.jsx";
import ListItems from "./components/ListItems.jsx";
import { useState } from "react";
import { TodoListContext } from "./store/Todo_list.store.jsx";
import { EmptyMessage } from "./components/EmptyListMessage.jsx";
let App = () => {


  let [todoListData, settodoListData] = useState([]);

  const onBtnClickHandler = (taskInput, dateInput) => {
    settodoListData((currval) => {return [...currval, { task: taskInput, date: dateInput}]});
  };

  const deteleBtnHandler = (taskName) => {
    const newDeletedTodoList = todoListData.filter(
      (todos) => todos.task != taskName
    );
    settodoListData(newDeletedTodoList);
  };

  return (
    <TodoListContext.Provider
      value={{ todoListData, deteleBtnHandler, onBtnClickHandler }}
    >
      <div className={`${styles.outerWrapper}`}>
        <div className="container pt-4">
          <div className="row">
            <Heading></Heading>
            <AddTodo></AddTodo>
          </div>
          <div className="row mt-5">
            <EmptyMessage></EmptyMessage>
            <ListItems></ListItems>
          </div>
        </div>
      </div>
    </TodoListContext.Provider>
  );
};

export default App;
