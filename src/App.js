import React from 'react';
import logo from './logo.svg';
import './App.css'
import Form from './Form'

const {useState}= React


const App =() => {
  const [todos, setTodos] = useState([]);

  const handleCompleted = (item) => {
    todos.map((todo, index) => 
      index === item ? {
        ...todo,
        completed: !todo.completed
    }: todo
    )}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <Form onSubmit={task => setTodos([{task, completed:false}, ...todos])} />
        <>
          {
            todos.map(({ task, completed }, item) => (
              <div key={item} onClick={() => handleCompleted(item)}
                style={{ textDecoration: completed ? 'line-through' : "" }}>
                {task}
              </div>
            ))
        }  
        </>
        <button onClick={()=> setTodos([])}>Reset</button>
      </header>
    </div>
  );
}

export default App;
