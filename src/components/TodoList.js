import React from 'react'
import '../App.css'
//components
import Todo from './Todo'

const TodoList = ({ setTodos, todos, filteredTodos }) => {
    return (
        
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        text={todo.text}
                        todo={todo}
                    />
                ))}
            </ul>
    )
}

export default TodoList
