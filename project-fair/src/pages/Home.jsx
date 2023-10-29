import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import project from '../assests/projects.png'
import ProjectCard from '../components/ProjectCard'
function Home() {
  return (
    <>
      {/*landing section  */}
      <div className='container-fluid rounded bg-primary' style={{width:'100%',height:'100vh'}}>
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 className='fw-bolder text-light' style={{fontSize:'80px'}}>
              <i class="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair
            </h1>
            <p>One stop destination for all software development projects, where user can add and manage their projects. Where user can add and manage their projects. As well as all projects available in our website... What are you waiting for!!!</p>
            <button className="btn btn-warning">Start to Explore <i className="fa-solid fa-right-long fa-beat ms-2"></i></button>
          </Col>
          <Col sm={12} md={6}>
            <img src={project} alt="" style={{marginTop:'80px'}} className='w-75'/>
          </Col>
        </Row>
      </div>
      {/*  all projects  */}
      <div className="all-projects mt-5">
        <h1 className='text-center mb-5'>Explore our Projects</h1>
        <marquee scrollAmount={25}>
          <div className='d-flex justify-content-between'>
            <div className='ms-5' style={{width:'600px'}}>
              <ProjectCard/>
            </div>
            <div className='ms-5' style={{width:'600px'}}>
              <ProjectCard/>
            </div>
            <div className='ms-5' style={{width:'600px'}}>
              <ProjectCard/>
            </div>
          </div>
        </marquee>
        <div className="text-center mt-5 mb-5">
          <Link to={`/projects`}>View more Projects</Link>
        </div>
      </div>
    </>
  )
}

export default Home