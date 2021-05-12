import { Category } from "./components/category/Category";
import { ToDoList } from "./components/ToDoList/ToDoList";

const ToDoContainer = () => {
  return (
    <div>
      <Category />
      <ToDoList />
    </div>
  );
};

export default ToDoContainer;
