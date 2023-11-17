import React from 'react'
import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI } from '../Services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({register}) {
    const navigate = useNavigate()
    const [userData,setUserData] = useState({
        username:'',email:"",password:""
    })
    const isRegisterForm = register?true:false
    const handleRegister = async (e)=>{
        e.preventDefault()
        const {username,email,password} = userData
        if(! username || !email ||!password ){
            toast.info("Please fill the form completely")
        }else {
            const result = await registerAPI(userData)
            console.log(result);
            if(result.status===200){
                toast.success(`${result.data.username} has registered successfully!!!`);
                setUserData({
                    username:'',email:"",password:""
                })
                navigate('/login')
            }else {
                toast.warning(result.response.data);
                console.log(result);
            }
        }
    }
  return (
    <div style={{width:'100%' ,height:'100vh'}} className='d-flex justify-content-center align-items-center'>
       <div className='w-75 container'>
        <Link to={'/'} style={{textDecoration:'none',color:'blue'}}> <i className="fa-solid fa-arrow-left me-1"></i> Back to home</Link>
        <div className="card shdow p-5 bg-primary">
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <img src="https://static-00.iconduck.com/assets.00/user-login-icon-487x512-xx4t1c61.png" className='rounded-start w-100' alt="" />
                </div>
                <div className='col-lg-6'>
                    <div className='d-flex align-items-center flex-column' >
                        <h1 className='fw-bolder text-light mt-2'>
                            <i className="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair
                        </h1>
                        <h5 className='fw-bolder mt-4 pb-3 text-light'>
                            {
                                isRegisterForm ? 'Sign up to your Account':'Sign in to your Account'
                            }
                            <Form className='text-light w-100'>
                                {
                                    isRegisterForm && 
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Control type="text" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} placeholder="Username" />
                                    </Form.Group>
                                }
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} placeholder="Enter your Email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="passwird" value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} placeholder="Enter Password" />
                                </Form.Group>
                                {
                                    isRegisterForm ?
                                    <div>
                                        <button onClick={handleRegister} className='btn btn-light'>Register</button>
                                        <p>Alredy Have an account? <Link to={'/login'} className='text-warning'>Login</Link></p>
                                    </div>
                                    :
                                    <div>
                                        <button className='btn btn-light'>Login</button>
                                        <p>New User? <Link to={'/register'} className='text-warning'>Register</Link></p>
                                    </div>
                                }
                            </Form>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
       </div>
       <ToastContainer
        position='top-center'
        autoClose={2000}  // Adjust this value as needed
        theme="colored"
         />
    </div>
  )
}

export default Auth