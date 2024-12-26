import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
    const [values,setValues] = useState({
        email: '',
        password:''
    })
    const navigate = useNavigate();

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        axios.post('http://localhost:8081/login',values)
        .then(res => 
        {
            if(res.data.Login)
                navigate('/')
            else
                alert("No records")
            console.log(res);

        })
        .catch(error => console.log(error));
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
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
                <button type='submit' className='btn btn-success w-100 rounded-0'>Log In</button>
                <p>You agree our terms and policies</p>
                <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-align-center">Don't have an Account</Link>
            </form>
        </div>
    </div>
  )
}
