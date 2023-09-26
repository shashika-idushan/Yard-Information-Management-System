import React, { useEffect, useRef, useState } from "react";
import '../styles/login.css'

function LoginPage() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-bg d-flex flex-column justify-content-center align-items-center">
            <div className="login-card">
             <div className="d-flex mb-4 justify-content-center align-items-center">
                <h1 className="">LOGIN</h1>
            </div>   
            
            <div>
                <div className="form-group">
                    <label htmlFor="">Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} className='form-control' />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className='form-control' />
                </div>
                <div className="form-group d-flex justify-content-center align-items-center">
                    <button className='btn btn-light' >Login</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default LoginPage;