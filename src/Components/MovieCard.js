import React from "react";
import { Card, Button } from "react-bootstrap";
import '../styles/MovieCard.css'

function Cards(props) {
  return (
    <div className="card">
      <div>
        <Card style={{width: "18rem"}}>
          <Card.Img variant="top" src={props.Movie.image} />
          <Card.Body  >
            <Card.Title className='title'>{props.Movie.name}</Card.Title>
            <Card.Text >
            {props.Movie.description} <br/> <br/>
            <strong className='rate'>Rating: {props.Movie.rating} </strong>
            </Card.Text>
            <Button variant="primary">Watch</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Cards;
