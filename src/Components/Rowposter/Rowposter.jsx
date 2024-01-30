import React, { useEffect, useState } from 'react'
import './Rowposter.css'
import axios from '../../axios.js'
import { API_KEY, imageUrl } from '../../constants/constants'
import YouTube from 'react-youtube';

function Rowposter(props) {

    const [movies, setMovies] = useState([])
    const [movieUrlId,setMovieUrl]=useState('')

    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data.results)
            setMovies(response.data.results)
        }).catch((err) => {
            // alert('err')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 0,
        },
    };

    const handleMovie = (id) => {
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((response) => {
            console.log(response.data);
            if(response.data.results.length!==0)
            {
                setMovieUrl(response.data.results[0].key)
            }

        })
    }

    return (
        <div className='row'>
            <h2 style={{ color: 'white', fontFamily: 'sans-serif' }}>{props.title}</h2>
            <div className='posters'>
                {movies.map((movie) => {
                    return (
                        <div>
                        <img onClick={() => { handleMovie(movie.id) }} className={props.isSmall ? 'small-poster' : 'poster'} src={`${imageUrl + movie.backdrop_path}`} alt="" />
                        <p class="movie-title">{movie.title}</p>
                        </div>
                    )
                })}
            </div>
           { movieUrlId && <YouTube videoId={movieUrlId} opts={opts}  /> }
        </div>
    )
}

export default Rowposter
