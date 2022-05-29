import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import Users from './Components/Users';

// primitve tyep 

let student: string = 'Rasel';
let age: number = 68;
let isSmart: boolean = true;

let students: string[] = ['Joe', "Biden", "Haris"]

let fees: number[] = [12, 13, 2655];


// object interface

interface Person {
  name: string,
  job?: string, //optional
  age: number,
  employed: string | boolean,
  location?: string | number,
}

const person: Person = {
  name: 'Bill Clinton',
  // job: "Bekar",
  employed: true,
  age: 50,
  location: 55
}

const handleAddUser = (firstName: string, age: number, address: string): string => {
  const total: number = 50;
  console.log(firstName, age, address);
  return firstName;
}


function App() {
  return (
    <div className="App">
      <Counter />
      <Users />
    </div>
  );
}

export default App;
