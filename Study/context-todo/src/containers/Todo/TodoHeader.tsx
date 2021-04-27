import {
  ChangeEvent,
  FC,
  FormEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import { useTodoDispatch } from "../../lib/hooks/useTodo";

const TodoHeader: FC = () => {
  const { addTodo } = useTodoDispatch();
  const [value, setValue] = useState<string>("");
  const id = useRef<number>(1);

  const changeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  const submitHandler = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addTodo({ done: false, id: id.current, text: value });
      id.current++;
      setValue("");
    },
    [value]
  );
  return (
    <form onSubmit={submitHandler}>
      <h2>TO_DO_LIST</h2>
      <input value={value} onChange={changeValue} />
      <button type="submit">ADD</button>
    </form>
  );
};

export default TodoHeader;
