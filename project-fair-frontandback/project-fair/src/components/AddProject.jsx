import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="peimary" onClick={handleShow}>
        Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col lg={6}>
                    <label><input type="file" style={{display:'none'}} /><img className='img-fluid' src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png" alt="project picture" /></label>
                </Col>
                <Col lg={6}>
                    <input type="text" className="form-control" placeholder='Project Title'/>
                    <input type="text" className="form-control" placeholder='Languages Used'/>
                    <input type="text" className="form-control" placeholder='Github Link'/>
                    <input type="text" className="form-control" placeholder='Website Link'/>
                    <input type="text" className="form-control" placeholder='Project Overview'/>
                </Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddProject