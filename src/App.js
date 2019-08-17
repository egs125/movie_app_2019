import React, { Component } from "react";
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    count : 0
  };

  add = () => {
    this.setState(current => ({ count : current.count + 1}));
    //this.setState({count : this.state.count + 1});
  };
  minus = () => {
    this.setState(current => ({ count : current.count - 1}));
    //this.setState({count : this.state.count -1 });
  };

  render(){
    return (
    <div>
      <h1>the number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>);
  }
}


//props -> arguements -> props 내부에서 fav 가져옴
/*
function Food (props){
  return <h1>I like {props.fav}</h1>;
}
 아래와 동일
function Food( {fav} ){
  return <h1>I Like {fav}</h1>
}

function Food ({name, picture}){
  return (
    <div>
      <h1>I Like {name}</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.PropTypes - {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired
};

const foodILike = [
  {
    id : 1,
    name : "kimchi",
    image : "https://images.app.goo.gl/vdCjQvgJahySrHRPA"
  },
];
*/


export default App;
