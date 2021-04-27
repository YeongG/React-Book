import { FC, useCallback } from "react";
import { TodoItem } from "../../components";
import { remove, toggle } from "../../lib/contexts/todoContext";
import { useTodoDispatch, useTodoState } from "../../lib/hooks/useTodo";

const TodoBody: FC = () => {
  const todos = useTodoState();
  const { removeTodo, toggleTodo } = useTodoDispatch();

  const toggleHandler = useCallback((id: number) => {
    toggleTodo(id);
  }, []);

  const removeHandler = useCallback((id: number) => {
    removeTodo(id);
  }, []);
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem {...todo} onToggle={toggleHandler} onRemove={removeHandler} />
      ))}
    </div>
  );
};

export default TodoBody;
