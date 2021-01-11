import React from 'react'
import { TodoItem, TodoContainer, TodoButtons } from '../styles/formStyles'
import { CheckButton, TrashButton } from '../styles/globalStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ text, todo, todos, setTodos }) => {

    //Events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    return (
        <TodoContainer animate={{ y: 5}} drag="y" dragConstraints={{top:0, bottom:0}} transition={{duration: 0.3}}>
            <TodoItem>
                <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            </TodoItem>
            <TodoButtons>
                <CheckButton onClick={completeHandler} className="complete-btn" >
                    <FontAwesomeIcon icon={faCheck} color="white" />
                </CheckButton>
                <TrashButton onClick={deleteHandler} className="trash-btn">
                    <FontAwesomeIcon icon={faTrash} color="white" />
                </TrashButton>
            </TodoButtons>
        </TodoContainer>

    )
}

export default Todo
