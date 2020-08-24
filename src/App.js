import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch('https://randomuser.me/api/')
    .then (res=> res.json())
    .then (data => setUsers(data.results))
  }, [])

  // const users = [{name :'Dipjol', age: 30, country:'Bangladesh'}, {name :'Dev', age: 30, country:'india'}, {name :'Jit', age: 30, country:'varot'}];
  return (
    <div className="App">
      
      <header className="App-header">
       
        
        {/* <MovieCounter></MovieCounter> */}

        {
          users.map(user => <Users 
            profile ={user.picture.large}
            title = {user.name.title}
            fname = {user.name.first}
            lname = {user.name.last} 
            email ={user.email}
            age = {user.dob.age}
            phone ={user.phone}
            info = {user.id.name}
            
            >
              
            </Users>)
          
        }
  
      </header>
      
    </div>
  );
}

function MovieCounter(){
  const [count, setCount]= useState(0);
  
const handleClick = () => setCount(count + 1);


  return (
  <div>
    <button onClick ={handleClick}>Add Movies</button>
    
  <h5>Numbers of Movies :- {count} </h5>
  <MovieDisplay movies ={count+10}></MovieDisplay>
  <MovieDisplay movies ={count+20}></MovieDisplay>
  <MovieDisplay movies ={count+30}></MovieDisplay>
  </div>
  )
}

function MovieDisplay(props){
return <h4>Movies I have Seen :- {props.movies}</h4>
}

function Users(props){
 
  
  const userStyle = {
    border: '2px solid red',
    width: '800px',
    borderRadius: '20px',
    margin:'10px'  
    

  }
  const imageStyle ={
    borderRadius: '50%'
  }
  return (
    <div style={userStyle}>
      <img style={imageStyle} src={props.profile} alt=""/>
        <h3>Name: {props.title} {props.fname} {props.lname} </h3>
        <p>Email: {props.email}</p>
        <p>Age: {props.age}</p>
        <p>Phone: {props.phone}</p>
  <p>Information: {props.info}</p>
        
        
    
    
  
    </div>
    )
    
}

export default App;
