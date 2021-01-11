import React, { useState, useEffect } from 'react'
import { Layout, Container, Header } from './styles/globalStyles'
import { WriteSection, FormSection, TodoSection } from './styles/formStyles'
import {motion} from 'framer-motion'
import './App.css';

//Components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once 
  useEffect(() => {
    getLocalTodos();
  }, []);

  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <Layout>
        <Header>
          <h1>easynote</h1>
        </Header>
        <Container>
          <WriteSection>
            <h1>{inputText}</h1>
          </WriteSection>
        </Container>
        <Container>
          <FormSection>
            <Form
              inputText={inputText}
              todos={todos}
              setTodos={setTodos}
              setInputText={setInputText}
              setStatus={setStatus}
            />
          </FormSection>
          <TodoSection>
            <TodoList
              setTodos={setTodos}
              filteredTodos={filteredTodos}
              todos={todos} />
          </TodoSection>
        </Container>
      </Layout>
    </div>
  );
}

export default App;
