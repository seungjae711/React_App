import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 'fdafd', name: 'Sungjae', age: 27},
      {id: 'fda', name: 'Mihyeung', age: 24},
      {id: 'fejy', name: 'Jiyoon', age: 27}
    ],
    showPersons: true
  };

  switchNamehandlerE =(Name) => {
    this.setState ({
      persons: [
        {name: 'Jake', age: 27},
        {name: 'Monica', age: 24},
        {name: 'James', age: 27}
      ]
    }) 
  } 

  switchNamehandlerK =(Name) => {
    this.setState ({
      persons: [
        {name: 'Sungjae', age: 27},
        {name: 'Mihyeung', age: 24},
        {name: 'Jiyoon', age: 27}
      ]
    }) 
  } 

  changedNameHandler =(event) => {
    this.setState ({
      persons: [
        {name: 'Jake', age: 27},
        {name: event.target.value, age: 24},
        {name: 'James', age: 27}
      ]
    })
  }

  togglePersonsHandler =() => {
    const doesshow = this.state.showPersons;
    this.setState ({showPersons: !doesshow});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  render () {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
 
            return <Person 
                    click = {() => this.deletePersonHandler(index)}
                    name = {person.name}
                    age = {person.age} 
                    key = {person.id}
                    changed = {(event) => this.nameChangeHandler(event, person.id)}/>
          })}  
        </div>
      );
      style.backgroundColor = 'red';
    };

    const classes = [];

    if (this.state.persons.length <=2 ) {
      classes.push('red');
    } 
    if (this.state.persons.length <=1 ) {
      classes.push('bold');
    }

    return (
      <div className='App'>
        <h1>Hello, I'm a React App</h1>
        <p className={classes.join(' ')}>Here are my Korean friends!</p>
        <button onClick={this.switchNamehandlerE}>Switch English Names!</button>
        <button onClick={this.switchNamehandlerK}>Switch Korean Names!</button>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    )
  };
}


export default App;