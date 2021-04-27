import { FC } from "react";
import "./todoStyle.css";
import { TodoProvider } from "../../lib/contexts/todoContext";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";

const TodoContainer: FC = () => {
  return (
    <TodoProvider>
      <div className="todo-container">
        <TodoHeader />
        <TodoBody />
      </div>
    </TodoProvider>
  );
};

export default TodoContainer;
