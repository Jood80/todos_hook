import React from 'react';
import logo from './logo.svg';
import './App.css';


const {useState}= React

const App =() => {

const [todos, setTodos] = useState([])

  
  const handleChange = (e) => {
    setTodos(e.target.value)
  console.log('handle change', todos);  
  }  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <form onSubmit={handleSubmit}>
          <input type='text' value={todos} onChange={handleChange}  placeholder="enter your task  over here"/>
          <button>ADDD it</button>
        </form>

      </header>
    </div>
  );
}

export default App;
