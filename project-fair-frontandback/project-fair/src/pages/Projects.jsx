import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <div>
      <Header/>
      <div style={{marginTop:"100px"}} className='projects mb-5'>
        <h1 className='text-center mb-5'>All Projects</h1>
        <div className="d-flex justify-content-center align-items-center w-100">
          <div className="d-flex border w-50 rounded" >
            <input type="text" className='form-control' placeholder='Search project by technologies used' />
            <i class="fa-solid fa-magnifying-glass fa-rotate-90"style={{marginLeft:'-50px'}} ></i>
          </div>
        </div>
        <Row className='mt-5 container-fluid'>
          <Col sm={12} md={6} lg={4} >
            <ProjectCard/>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Projects