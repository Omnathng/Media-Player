import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <div>
      <Header insideDashboard/>
      <Row style={{marginTop:'100px'}} className="container-fluid">
        {/* my project */}
        <Col sm={12} md={8}>
          <h2 className='mt-2'>Welcome <span className='text-warning'>User</span></h2>
          <MyProjects/>
        </Col>
        {/* my profile */}
        <Col sm={12} md={4}>
          <Profile/>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard