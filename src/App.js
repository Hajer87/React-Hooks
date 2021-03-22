import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col} from 'react-bootstrap'

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";

import { DataMovies } from "./Components/DataMovies";



function App() {
  const [Movieslist, setMovieslist] = useState(DataMovies)
const [Keyword, setKeyword] = useState("")
const [Rating, setRating] = useState("")
const setSearchKeyword=(word)=>{
  setKeyword(word)
}
const setSearchRating=(x)=>{
  setRating(x+"") 
}
const addToMovieslist=(name,description,image,rating)=> {
setMovieslist([...setMovieslist,{name:name,description:description,image:image,rating:rating}])
}
  return (
    <div className="App">
      <header className='header'>
      <Header addToMovieslist={addToMovieslist} setSearchKeyword={setSearchKeyword} setSearchRating={setSearchRating}/>
      </header>
     <Row style={{ margin: '100'}}>
       <Col>
       <MovieList Movies={Movieslist} Keyword={Keyword} setSearchRating={Rating}/>
       </Col>
     </Row>
      
      <Footer/>
    </div>
  );
}

export default App;
