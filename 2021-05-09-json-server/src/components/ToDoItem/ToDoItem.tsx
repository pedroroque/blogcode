import css from "./ToDoItem.module.css"

export interface ToDoItemProps {
    value: string;
}

export const ToDoItem = (props:ToDoItemProps) => {
  return <div>
      <input type="text">props.Value</input>
  </div>;
};
