import { useContext } from "react"
import { TodoListContext } from "../store/Todo_list.store"
export const EmptyMessage = ()=>{
  const {todoListData} = useContext(TodoListContext);
  return <>
  {todoListData.length ===0 && <h1>Welcome...</h1>}
  </>
}