import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../constants/constants'
import './Banner.css'
import axios  from '../../axios'
function Banner() {
    const [movie,setMovie]=useState()
    useEffect(() =>{
        axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
            console.log(response.data)
            setMovie(response.data.results[0])

        })
    },[])
    return (
        <div style={{backgroundImage: `url(${movie?imageUrl+movie.backdrop_path:""})`}}
        className='banner'>
             <div className="fade-top"></div>
            <div className='content'>
                <h1 className='title'>{movie? movie.name:""}</h1>
                <h1 className='description'>{movie? movie.overview:""}
                </h1>
                <div className='banner-buttons'>
                    <button className='button'><i class="fa-solid fa-play"></i>&nbsp;&nbsp;Play</button>
                    <button className='button'>My List</button>
                </div>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
