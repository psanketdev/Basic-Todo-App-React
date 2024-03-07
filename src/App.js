import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [todoList, setTodoList] = useState("");
  const [todoItem, setTodoItem] = useState([]);

  // Stored the input onchange values
  const onChangeEvent = (e) => {
    setTodoList(e.target.value);
  };

  // Update the todoItem state
  const addTodos = () => {
    setTodoItem((oldTodos) => {
      return [...oldTodos, todoList];
    });
    setTodoList("");
  };

  // Delet the todoItem state items
  const onClickOnDeleteItem = (id) => {
    let hasDelete = window.confirm("Are you sure want to delete this item?");
    if (hasDelete) {
      setTodoItem((oldTodos) => {
        return oldTodos.filter((item, index) => index !== id);
      });
    }
  };

  return (
    <>
      <section className="todo-container">
        <div className="container">
          <h2>TODO APP</h2>
          <div className="todo-card">
            <div className="form-group">
              <input type="text" className="form-control" value={todoList} onChange={onChangeEvent} />
              <button className="todo-add" onClick={addTodos}>+</button>
            </div>
          </div>
          <ol className="todo-list">
            {todoItem.map((item, index) => {
              return (
                <Todo
                  item={item}
                  id={index}
                  key={index}
                  deleteItem={onClickOnDeleteItem}
                />
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}

export default App;
