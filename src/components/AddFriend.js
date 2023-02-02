import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "../Utils/axiosWithAuth";

const AddFriend = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: '',
        age: '',
        email: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
        axiosWithAuth().post('/friends', form)
            .then(resp => {
                navigate('/friends');
            })
            .catch(err => {
                console.log(err);
            })
    }
    console.log(form);
    return (<div>
        <h2>Add Friend</h2>
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="name">Name:</label>
                <input onChange={handleChange} name="name" id="name" />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input onChange={handleChange} name="age" id="age" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} name="email" id="email" />
            </div>
            <button>Submit</button>
        </form>
    </div>
    )
}

export default AddFriend;