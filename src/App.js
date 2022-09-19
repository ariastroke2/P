import logo from './logo.svg';
import './App.css';
import {Ghandler} from './addi/Ghandler';
import React, {useState, useEffect} from 'react';



function App() {
  let ActionList = [{title: 'Pasear perro', time: 'n/a', id: -1}, {title: 'Hacer tarea', time: 'n/a', id: -2}, {title: 'Lavar trastes', time: 'n/a', id: -3}];
  let numt = 0;  

  return (
    <div className="App">
      <header className="App-header">
       
        <Ghandler ActionList = {ActionList} />
      
      </header>
    </div>
  );
}

export default App;
