import React from 'react'
import { Button, PlusButton, Input } from '../styles/globalStyles'
import { Select, SelectSection } from '../styles/formStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons'

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 },])
        setInputText('')
    }
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <Input value={inputText} onChange={inputTextHandler} className="todo-input" />
            <PlusButton onClick={submitTodoHandler} className="todo-button" type="submit">
                <FontAwesomeIcon icon={faPlus} color="white" />
            </PlusButton>
            <SelectSection>
                <Select onChange={statusHandler} name="todos" className="filter-todo" id="">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </Select>
            </SelectSection>

        </form>
    )
}

export default Form
