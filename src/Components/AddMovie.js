import  React, {useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Nav} from "react-bootstrap";
import AddForm from "./AddForm";

function Popup(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shows, setShows] = useState(false);
  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);
  const handle = () => { handleShows(); handleClose() };


  return (
    <div className="popup">
      <Nav.Link href="#addMovie"onClick={handleShow}>Add Movie</Nav.Link>
      {show?
      <Modal show={show} onHide={handleClose} backdrop="true" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handle}>Add</Button>
          </Modal.Footer>
          </Modal>:null}
          {shows&&!show?
          <Modal show={shows} onHide={handleCloses} backdrop="true" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Success</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           Your movie is added successfully!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloses}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCloses}>Thank You!</Button>
          </Modal.Footer>
      </Modal>:null}
    </div>
  );
}

export default Popup;
