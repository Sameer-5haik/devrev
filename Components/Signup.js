import React, {useState} from 'react';
import './Login.css'
import image from './booksy.jpg'
import { Input, message, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {

    const navigate = useNavigate();
    const adminEmail = 'devrev@gmail.com';
    const adminPassword = '123';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    // const handleSubmit = () => {
    //     if (email === adminEmail) {
    //         if (password === adminPassword) {
    //             message.success('Welcome Back');
    //             navigate('/home');
    //         } else {
    //             message.error('Invalid Email or Password');
    //         }
    //     } else {
    //         message.error('Invalid Email or Password');
    //     }

    // }

    async function handleSubmit (){
        try {
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div className='login-page' style={{ backgroundImage: `url(${image})` }}>
            <div className='login-box'>
                <div style={{ width: '100%' }}>
                    <p style={{ marginLeft: '25rem' }}>Sign Up</p>
                    <div style={{ marginLeft: '10rem', marginTop: '7rem' }}>
                        <b >Email : </b>
                        <Input onChange={e => { handleEmail(e) }} style={{ width: '80%', marginLeft: '1rem' }}></Input>
                    </div>
                    <div style={{ marginLeft: '8rem', marginTop: '2rem' }}>
                        <b >Password : </b>
                        <Input onChange={e => { handlePassword(e) }} style={{ width: '77.5%', marginLeft: '1rem' }}></Input>
                    </div>
                    <div style={{ marginLeft: '8rem', marginTop: '2rem' }}>
                        <b >Full Name : </b>
                        <Input style={{ width: '77.5%', marginLeft: '1rem' }}></Input>
                    </div>
                    <div style={{ marginLeft: '8rem', marginTop: '2rem' }}>
                        <b >Address : </b>
                        <Input style={{ width: '77.5%', marginLeft: '1rem' }}></Input>
                    </div>
                    <div style={{ marginLeft: '10rem', marginTop: '1rem' }}>
                        <p onClick={() => { navigate('/') }}>Back To Login </p>
                    </div>
                </div>
                <div style={{ width: '50%' }}></div>
                <Button style={{ width: '30%', marginLeft: '22rem' }} onClick={() => { handleSubmit() }}>Submit</Button>
            </div>
        </div>
    );
}

export default Signup