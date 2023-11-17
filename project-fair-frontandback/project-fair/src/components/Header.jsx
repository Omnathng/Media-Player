import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (

      <Navbar className="bg-primary position-fixed z-1 top-0 w-100">
        <Container>
          <Navbar.Brand>
          <Link to={'/'} style={{textDecoration:"none",color:'white'}} className='fw-bolder fs-4'><i className="fa-brands ms-1 fa-stack-overflow fa-bounce"></i> Project Fair</Link>
          </Navbar.Brand>
          { insideDashboard &&
            <div className='btn btn-link text-decoration-none ms-auto text-warning fw-bolder fs-5' >Logout<i className="fa-solid ms-2 fa-right-from-bracket fa-beat-fade"></i></div>}
        </Container>
      </Navbar>
  )
}

export default Header