"use client"
import React from 'react'
import "./user.css"
import { useAuth } from "../contexts/authContext";

//display current user info
const UserWidget = () => {
    const { currentUser } = useAuth();

    return (
        <div className='user-widget'>
            <div className='person-container'>
                <img src="https://www.freeiconspng.com/uploads/msn-people-person-profile-user-icon--icon-search-engine-11.png" alt="personSVG" className='person'/>
            </div>
            <div className='username'>Username: {currentUser.username}</div>
            <div className='email'>Email: {currentUser.email}</div>
        </div>
    )
}

export default UserWidget