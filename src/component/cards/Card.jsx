import React, { Component } from 'react'

import './cards.css'
export class Card extends Component {
    render() {
        const { movies } = this.props
        return (
            <div className='all-movies'>
                {movies.map(e => (
                    <div className="movies-card" key={e.id + e.original_title}>
                        <h2>{e.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`} alt="image" style={{width : '50%'}} />
                        <p>Date : {e.release_date}</p>
                        <p>Overview : <br />{e.overview}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Card
