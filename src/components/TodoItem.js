import React from "react";
import { deleteColor } from "../helper/colors";

export default function TodoItem({ text, toggleItem, deleteItem, complete }) {
  return (
    <div
      className={`todoItem ${complete && "completed"}`}
      // style={{ color: complete && activeColor, textDecoration: complete &&  'line-through' }}
    >
      <li className={`text ${complete && "completed"}`} onClick={toggleItem}>
        {text}
      </li>

      <div className="buttons">
        <button
          className="item-button"
          // style={{ color: !complete  && activeColor }}
          onClick={toggleItem}
        >
          {complete ? "Undone" : "Done"}
        </button>

        <button
          className="item-button"
          style={{ backgroundColor: deleteColor }}
          onClick={deleteItem}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
