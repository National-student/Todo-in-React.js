import React from "react";

export const ListItem = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" />
      <h2>{todo}</h2>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
};
