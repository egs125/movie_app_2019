import React from 'react';
import logo from './logo.svg';
import './App.css';

function Food (props){
  return <h1>I like {props.fav}</h1>;
}
/* 아래와 동일
function Food( {fav} ){
  return <h1>I Like {fav}</h1>
}
*/

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="bab" />
      <Food fav="gogi" />
      <Food fav="ramyun" />
    </div>
  );
}

export default App;
