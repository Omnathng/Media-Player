import React, { useState } from 'react'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import projectpic from '../assests/projectfair.png'

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Card className='shadow mb-5 btn' onClick={handleShow}>
      <Card.Img variant="top" src={projectpic} />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}>
                    <img style={{height:"200px"}} src={projectpic} className='img-fluid' alt="" />
                </Col>
                <Col md={6}>
                   <h2>Project Title</h2>
                   <p>Project Overview : Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nostrum ipsa eius quae facilis accusantium, in accusamus aliquid debitis aspernatur illo rerum fuga! Maxime at perferendis consequatur itaque commodi ex.</p>
                   <p>Language used: <span className='fw-bolder'>HTML,CSS,React</span></p>
                </Col>
            </Row>
            <div className="mt-3">
                        <a href='https://github.com/Omnathng/project-fair' target='_blank' className='me-5 btn'><i className="fa-brands fa-github fa-2x"></i></a>
                        <a href='https://omnath-color-changer-app.netlify.app/' target='_blank' className='me-5 btn'><i className="fa-solid fa-link fa-2x"></i></a>
                   </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard