import React from "react";
import { Form } from "react-bootstrap";

function PopupForm(props) {

  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title :</Form.Label>
          <Form.Control
            ref={props.name}
            type="text"
            placeholder="Movie's title..."
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description :</Form.Label>
          <Form.Control
            ref={props.description}
            as="textarea"
            rows={3}
            placeholder="write the movie's description here!"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Rating :</Form.Label>
          <Form.Control ref={props.rating} as="select">
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Form.Control>
          <Form.Group>
            <Form.File ref={props.image} className="label"
              id="exampleFormControlFile1"
              label="Movie's Poster:"
            />
          </Form.Group>
        </Form.Group>
      </Form>
    </div>
  );
}

export default PopupForm;
