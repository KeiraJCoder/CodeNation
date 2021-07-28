// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// class App extends React.Component {
// render () {
// return (
// <div>
// <h1>Hi my name is {this.props.Person}</h1>
// <Person name = "Keira" petName = "Sir swimalot" type= "Turdle" />
// <Job job ="Innovation Developer"/>
// </div>
// )
// }
// }

// const Person = (props) => {
// return (
// <h4>My name is {props.name}</h4>
// )
// }


// const Job = (props) => {
//   return (
//   <h4>I work as an {props.job}</h4>
//   )
//   }

// export default App;


// import React from "react";
// import Persons from "./components/persons"
// class App extends React.Component {
//   state = {
//     persons: [
//       {name: "dan", age: 34},
//       {name: "ben", age: 21},
//       {name: "leon", age: 30},
//       {name: "chris", age: 28}
//     ],
//     myNumber: 0,
//     showPerson: false
//   }
// bookPrices = [2.5, 4.5, 3.5, 6.0, 8.0];

//   togglePerson=()=>{
//     this.setState({showPerson: !this.state.showPerson})
//   };

//   greeting = () =>{
//     alert("Helloooooo")
//   }
//   render(){
//     console.log(this.State)
//     return (
//       <div>
//         <h1>hello</h1>
//         <div>
//           {this.state.persons.map(person => {
//             return <Persons name={person.name} age={person.age}/>
//           })}
//           </div>
//         </div>
//     )
//   }
// }

// export default App;

import React from "react";
class App extends React.Component {
  state = {
    myNumber: 0
  }
  addOne = (newNum) => {
    this.setState({myNumber: newNum})
  }
  minusOne = (newNum) => {
    this.setState({myNumber: newNum})
  }
  render(){
    return (
      <div>
        <h1>counter</h1>
        <h2>{this.state.myNumber}</h2>
        <button onClick={() => this.addOne(this.state.myNumber + 1)}>add 1</button>
        <button onClick={() => this.minusOne(this.state.myNumber - 1)}> minus 1 </button>
      </div>
    )
  }
}
export default App;