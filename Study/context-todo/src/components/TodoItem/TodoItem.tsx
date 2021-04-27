import { FC } from "react";
import { TodoListItem } from "../../lib/payloads/todoType";

interface Props extends TodoListItem {
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem: FC<Props> = ({ done, id, text, onRemove, onToggle }) => {
  return (
    <div>
      <div>{text}</div>
      <div>
        <button onClick={() => onRemove(id)}>DEL</button>
        <button onClick={() => onToggle(id)}>{done ? "TRUE" : "FALSE"}</button>
      </div>
    </div>
  );
};

export default TodoItem;
