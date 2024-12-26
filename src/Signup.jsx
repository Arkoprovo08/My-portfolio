import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Signup() {

    const [values,setValues] = useState({
        name: '',
        email: '',
        password:''
    })
    const navigate = useNavigate();

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        console.log("hi")
        await axios.post('http://localhost:8081/signup',values)
        .then(res => 
        {
            console.log(res);
            navigate('/login')}
        )
        .catch(error => console.log(error));
        console.log("bye");
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Username</strong></label>
                    <input type='text' placeholder='Enter Username' name='name' onChange={handleInput}
                    className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter email' name='email' onChange={handleInput}
                    className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password</strong></label>
                    <input type='password' placeholder='Enter password' name='password' onChange={handleInput}
                    className='form-control rounded-0'/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Sign Up</button>
                <p>You agree our terms and policies</p>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-align-center">Log In</Link>
            </form>
        </div>
    </div>
  )
}
