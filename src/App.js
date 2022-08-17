import { useState, useEffect } from "react";
import "./index.css";
import TodoItem from "./components/TodoItem";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    let savedTodos = localStorage.getItem("todos");

    if (!savedTodos) return;
    let parsedTodos = JSON.parse(savedTodos);
    setTodos(parsedTodos);
  };

  const saveTodo = () => {
    if (text.trim() === "") return;
    let newTodo = {
      id: Date.now(),
      content: text,
    };
    setTodos([...todos, newTodo]);
    saveToLocalStorage(newTodo);
  };

  const saveToLocalStorage = (newTodo) => {
    let _todos = todos;
    _todos.push(newTodo);
    saveToStorage(_todos);
    setText("");
  };

  const removeTodo = (index) => {
    let _todos = todos;
    if (index > -1) {
      _todos.splice(index, 1);
      setTodos(_todos);
      saveToStorage(_todos);
      getTodos();
    }
  };

  const saveToStorage = (list) => {
    localStorage.setItem("todos", JSON.stringify(list));
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <main>
        <h1>React todo with local storage</h1>
        <div className="input-container">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add an item ..."
          />
          <button onClick={saveTodo}>Add</button>
        </div>
        <ul className="todo-items">
          {todos.map((todo, i) => {
            return (
              <TodoItem
                key={todo.id}
                onRemove={() => removeTodo(i)}
                content={todo.content}
              />
            );
          })}
        </ul>
        {todos.length < 1 ? (
          <p className="empty-state">No saved items!</p>
        ) : null}
      </main>
    </div>
  );
}

export default App;
