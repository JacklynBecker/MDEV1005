"use client"
import React, { useEffect } from 'react'
import "./meme.css"
import { useState } from "react";
import axios from 'axios'

//display memes 
const MemeWidget = () => {
    const [memeData, setMemeData] = useState(null)
    
    //get memes from api
    useEffect(()=> {
            axios.get(`https://api.imgflip.com/get_memes`)
            .then(response =>{
                setMemeData(response.data)
            }).catch(error=>{
                console.error("error: ", error)
            })
 

    })

    if(!memeData) return <div>Loading...</div> 


    return (
        <div className='meme-widget'>
            <h2 className='meme-header'>Memes</h2>
            <div className='meme-container'>
                <div className='meme1-container'>
                <div className='memeName'>{memeData.data.memes[2].name}</div>
                <img src={memeData.data.memes[2].url} alt="Image" className='memeImage'/>
                </div>
                <div>
                <div className='memeName'>{memeData.data.memes[1].name}</div>
                <img src={memeData.data.memes[1].url} alt="Image" className='memeImage'/>
                </div>
            </div>
        </div>
    )
}

export default MemeWidget