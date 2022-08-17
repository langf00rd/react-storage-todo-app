const TodoItem = (props) => {
  const { content, onRemove } = props;

  return (
    <li className="todo-item">
      <p>{content}</p>
      <p onClick={onRemove} className="remove-todo-btn">
        &times;
      </p>
    </li>
  );
};

export default TodoItem;
