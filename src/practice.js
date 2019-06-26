import React, {useState} from 'react';
import Person from './Person/Person';
import './App.css';

const App = porps => {
  const[personsState, setPersonsState] = useState({
    persons: [
      {name: 'Sungjae', age: 27},
      {name: 'Mihyeung', age: 24},
      {name: 'Jiyoon', age: 27}
    ]
  });

  const switchNamehandlerE =(Name) => {
    setPersonsState ({
      persons: [
        {name: 'Jake', age: 27},
        {name: 'Monica', age: 24},
        {name: 'James', age: 27}
      ]
    }) 
  } 
  const switchNamehandlerK =(Name) => {
    setPersonsState ({
      persons: [
        {name: 'Sungjae', age: 27},
        {name: 'Mihyeung', age: 24},
        {name: 'Jiyoon', age: 27}
      ]
    }) 
  } 
  const changedNameHander =(event) => {
    setPersonsState ({
      persons: [
        {name: 'Jake', age: 27},
        {name: event.target.value, age: 24},
        {name: 'James', age: 27}
      ]
    })
  }

  return (
    <div className='App'>
      <h1>Hello, I'm a React App</h1>
      <button onClick={switchNamehandlerE}>switch English Names!</button>
      <button onClick={switchNamehandlerK}>switch Korean Names!</button>
      <Person 
        name = {personsState.persons[0].name} 
        age = {personsState.persons[0].age}>
      </Person>
      <Person 
        name = {personsState.persons[1].name} 
        age = {personsState.persons[1].age}
        changed = {changedNameHander}>
      </Person>
      <Person 
        name = {personsState.persons[2].name} 
        age = {personsState.persons[2].age}>
      </Person>    
    </div>

  );
}


export default App;