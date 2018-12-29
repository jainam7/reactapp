import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name : "Jainam",age :21},
      {name : "Fenil", age :31},
      {name : "Mohit", age :51}
      ],
      showPerson : false
  }
  changeNameHandler = (newName) => {
    this.setState(
      {
        persons : [
          {name :newName, age : 21},
          {name :"Fenil Shah", age : 33},
          {name :"Mohit Shah", age : 42},
        ]
      }
    )
  }
  nameChangeHandler = (event) => {
    this.setState(
      {
        persons : [
          {name :"jainam", age : 21},
          {name :event.target.value, age : 33},
          {name :"Mohit Shah", age : 42},
        ]
      }
    )

  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow});
  }
  render() {
    const style = {
      backgroundColor : 'white',
      font : 'inherit',
      border : '8px solid blue',
      padding : '8px',
      cursor : 'pointer'
    }
    return (
      <div className="App">
      <h1>Hi I m React App!</h1>
      <p>This is Working !!</p>
      <button 
      style={style}
      onClick={this.togglePersonHandler}>Switch Name</button>
      
       { this.state.showPerson === true ?
        <div>
           <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/> 
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age} click={this.changeNameHandler.bind(this,'Jainam !!')}
      changed={this.nameChangeHandler}>My Hobbies : Cricket </Person>
      <Person 
      name={this.state.persons[2].name} 
      age={this.state.persons[2].age}/> 
     </div> : null
       }
    
          </div>
    );
  }
}

export default App;
