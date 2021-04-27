import { FC } from "react";
import { TodoListItem } from "../../lib/payloads/todoType";
import "./todoStyle.css";

interface Props extends TodoListItem {
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem: FC<Props> = ({ done, id, text, onRemove, onToggle }) => {
  return (
    <div className="todo-wrap">
      <span className="todo-text">{text}</span>
      <span>
        <button className="todo-btn" onClick={() => onRemove(id)}>
          DEL
        </button>
        <button className="todo-btn" onClick={() => onToggle(id)}>
          {done ? "TRUE" : "FALSE"}
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
