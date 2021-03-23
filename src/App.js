import React, { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
import { Row, Col} from 'react-bootstrap'

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
import Search from './Components/SearchName';
import { DataMovies } from "./Components/DataMovies";
import SearchName from "./Components/SearchName";




function App() {
  //states
  const [Movieslist, setMovieslist] = useState(DataMovies)
const [Keyword, setKeyword] = useState("")
const [Rating, setRating] = useState("")



//Add Movie
const addMovie = (newMovie) => setMovieslist([...Movieslist, newMovie]);

  return (
    <div className="App">
      <header className='header'>
    
      <Header   setRating={setRating}/>
      <SearchName setKeyword={setKeyword}/>
      </header>
     
     <Row style={{ margin: '200'}}>
       <Col>
       <MovieList Movies={Movieslist} Keyword={Keyword} setSearchRating={Rating}/>
       </Col>
     </Row>
     <AddMovie addMovie={addMovie} />

      <Footer/>
    </div>
  );
}

export default App;
