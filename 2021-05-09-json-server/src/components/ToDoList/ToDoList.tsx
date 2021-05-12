export enum ToDoStatus {
    Active,
    Deleted,
    Completed
}

export interface ToDo {
    category: string;
    name: string;
    status: ToDoStatus; 
}

export interface ToDoListProps {
    
}

export const ToDoList = () => <div></div>;
