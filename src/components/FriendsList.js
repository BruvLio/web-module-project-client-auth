import axios from "axios";
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../Utils/axiosWithAuth";


const Friendlist = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(resp => {
                setFriends(resp.data);
            }).catch(err => {
                console.log(err)
            })
    }, []);

    return (
        <div>
            <h2>Friendlist</h2>
            <ul>
                {
                    friends.map(friend => {
                    return <li>{friend.name} - {friend.age} - {friend.email}</li>
                })}
            </ul>
        </div>
    )

}

export default Friendlist;