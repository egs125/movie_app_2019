import React, { Component } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import Movie from "./Movie";

class App extends Component {
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => {
    const { data : { data : { movies }}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log( movies);
    this.setState({ movies, isLoading : false});
  }

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading" : movies.map(movies => {
      return < Movie id={movies.id} year={movies.year} title={movies.title} summary={movies.summary} poster={movies.medium_cover_image} />
    })}</div>;
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
