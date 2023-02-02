import axios from "axios";
import React, { useState, } from "react";
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const navigate = useNavigate()
    const [cred, setCred] = useState({
        username: "",
        password: ""
    });

    console.log(props)
    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
            .then(resp => {
                localStorage.setItem("token", resp.data.token);
                navigate('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (<div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input onChange={handleChange} name="username" id="username" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} name="password" type="password" id="password" />
            </div>
            <button>Submit</button>
        </form>
    </div>)
}


export default Login;