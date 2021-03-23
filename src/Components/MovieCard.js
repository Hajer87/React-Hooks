import React from "react";
import { Card } from "react-bootstrap";
import RatingStar from './RatingStars'

import '../styles/MovieCard.css'

function Cards(props) {
  return (
    <div >
      <div>
        <Card className="card">
          <Card.Img className='image' variant="top" src={props.Movie.image} />
          <Card.Body  >
            <Card.Title className='title'>{props.Movie.name}</Card.Title>
            <Card.Text  style={{ color: "black"}}>
            {props.Movie.description} <br/> <br/>
            <strong className='rate'>{props.Movie.rating}/5 </strong>
            <RatingStar rating={props.Movie.rating}/>
            </Card.Text>
             </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
