import React from "react";

export default function Todo({ item, id, deleteItem }) {
  return (
    <li>
      <span>{item}</span>
      <a
        href="#"
        className="todo-delete"
        onClick={() => {
          deleteItem(id);
        }}>
        x
      </a>
    </li>
  );
}
