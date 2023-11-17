import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
    const [open, setOpen] = useState(false);
  return (
    <div className='d-flex flex-column mt-2 w-100 justify-content-center card shadow p-5'>
        <div className='d-flex w-100 justify-content-between'>
            <h3>My Profile</h3>
            <div className='btn btn-light shadow text-success' onClick={() => setOpen(!open)} ><i className="fa-solid fa-chevron-down"></i></div>
        </div>
        <Collapse in={open}>
            <div className="row justify-content-center w-100 mt-3">
                {/* upload dp */}
                <label className='text-center'>
                    <input type="file" style={{display:'none'}} id="profile" />
                    <img src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png" width={'200px'} height={'200px'} alt="" />
                </label>
                <div className="mt-3">
                    <input type="text" placeholder='GitHub' className='form-control'/>
                </div>
                <div className="mt-3">
                    <input type="text" placeholder='LinkedIn' className='form-control'/>
                </div>
                <div className="mt-3 text-center d-grid">
                    <button className='btn btn-primary '>Update</button>
                </div>
            </div>
        </Collapse>
    </div>
  )
}

export default Profile