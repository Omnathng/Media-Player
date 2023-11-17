import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
  return (
    <div className='card shadow p-3 mt-3'>
        <div className='d-flex justify-content-between'>
            <h3>My Projects</h3>
            <div><AddProject/></div>
        </div>
        <div className="mt-4">
            {/* collection of user projects */}
            <div className="border d-flex align-items-center rounded p-2">
                <h5>Project Title</h5>
                <div className="icon ms-auto">
                    <button className="btn"><i className="fa-solid fa-pen-to-square fa-2x"></i></button>
                    <button className="btn"><i className="fa-brands fa-github fa-2x"></i></button>
                    <button className="btn"><i className="fa-solid fa-trash fa-2x"></i></button>
                </div>
            </div>
            <p className='text-danger fw-bolder fs-5'>No Projects Uploaded yet !!!</p>
        </div>
    </div>
  )
}

export default MyProjects