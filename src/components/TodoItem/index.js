const TodoItem=(props)=>{
    const {content}=props
    return (
        <li className='todo-item'>
        <p>{content}</p>
        <p onClick={props.onRemove} className='remove-todo-btn'>&times;</p>
        </li>
    )
}

export default TodoItem