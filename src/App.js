import React from 'react';

//props -> arguements -> props 내부에서 fav 가져옴
/*
function Food (props){
  return <h1>I like {props.fav}</h1>;
}
 아래와 동일
function Food( {fav} ){
  return <h1>I Like {fav}</h1>
}
*/
function Food ({name, picture}){
  return (
    <div>
      <h1>I Like {name}</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image : "https://images.app.goo.gl/vdCjQvgJahySrHRPA"
  },
  {
    id : 2,
    name : "gogi",
    image : "https://images.app.goo.gl/AiJPPbAy3s4ehZDX8"
  },
  {
    id : 3,
    name : "ramyun",
    image : "https://images.app.goo.gl/pppEM5PgwPrH9fCX8"
  }

];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
