import { useContext, useCallback } from "react";
import {
  TodoStateContext,
  TodoDispatchContext,
  create,
  remove,
  toggle,
} from "../contexts/todoContext";
import { TodoListItem } from "../payloads/todoType";

export const useTodoState = () => {
  return useContext(TodoStateContext);
};

export const useTodoDispatch = () => {
  const dispatch = useContext(TodoDispatchContext);

  const addTodo = useCallback((todo: TodoListItem) => {
    dispatch(create(todo));
  }, []);

  const removeTodo = useCallback((todoId: number) => {
    dispatch(remove(todoId));
  }, []);

  const toggleTodo = useCallback((todoId: number) => {
    dispatch(toggle(todoId));
  }, []);

  return {
    addTodo,
    removeTodo,
    toggleTodo,
  };
};
