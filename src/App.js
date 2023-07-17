import { useState } from "react";
import "./App.css";
import { List } from "./Components/List/List";
import { ListItem } from "./Components/ListItem/ListItem";

function App() {
  const localData = JSON.parse(localStorage.getItem("todo")) || [];
  const [todo, setTodo] = useState(localData);

  const handleTodo = (evt) => {
    if (evt.target.value) {
      if (evt.keyCode == 13) {
        const Todo = {
          id: 1,
          todo: evt.target.value,
          isComplated: false,
        };

        setTodo([Todo, ...todo]);
        localStorage.setItem("todo", JSON.stringify([Todo, ...todo]));
        evt.target.value = "";
      }
    }
  };

  console.log(todo);

  return (
    <>
      <input onKeyUp={handleTodo} type="text" placeholder="Todo text" />

      {todo.map((item) => (
        <List>
          <ListItem todo={item.todo} />
        </List>
      ))}
    </>
  );
}

export default App;
