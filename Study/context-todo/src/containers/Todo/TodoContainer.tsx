import { FC } from "react";
import { TodoProvider } from "../../lib/contexts/todoContext";
import TodoBody from "./TodoBody";
import TodoHeader from "./TodoHeader";

const TodoContaienr: FC = () => {
  return (
    <TodoProvider>
      <TodoHeader />
      <TodoBody />
    </TodoProvider>
  );
};

export default TodoContaienr;
