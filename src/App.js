import React from 'react'
import logo from './logo.svg';
import './App.css';
import TaskContainer from './components/TaskContainer';


function App() {
  return (
   <div className="container mt-3">
     <h1> Task Box </h1>
     <TaskContainer />
   </div> 
  )
}

export default App;
