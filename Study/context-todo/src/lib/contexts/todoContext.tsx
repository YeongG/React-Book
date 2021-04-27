import { createContext, Dispatch, FC, useReducer } from "react";
import { TodoListItem } from "../payloads/todoType";

export const CREATE = "CREATE" as const;
export const TOGGLE = "TOGGLE" as const;
export const REMOVE = "REMOVE" as const;

export const create = (todo: TodoListItem) => ({
  type: CREATE,
  payload: { todo },
});
export const toggle = (id: number) => ({
  type: TOGGLE,
  payload: { id },
});
export const remove = (id: number) => ({
  type: REMOVE,
  payload: { id },
});

type TodoAction = ReturnType<typeof create | typeof toggle | typeof remove>;

const initialState: TodoListItem[] = [];

const todoReducer = (
  state: TodoListItem[] = initialState,
  action: TodoAction
): TodoListItem[] => {
  switch (action.type) {
    case CREATE: {
      return state.concat(action.payload.todo);
    }
    case TOGGLE: {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
    }
    case REMOVE: {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
};

export const TodoStateContext = createContext<TodoListItem[]>([
  ...initialState,
]);
export const TodoDispatchContext = createContext<Dispatch<TodoAction>>(
  {} as Dispatch<TodoAction>
);

export const TodoProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, [...initialState]);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
