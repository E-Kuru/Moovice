import React, { Component } from 'react'

export class Favorites extends Component {
    constructor ( ){
        super()

        this.state = {
            movies : [],
            favID : JSON.parse(localStorage.getItem('favorite'))
        }
        this.getMovie = this.getMovie.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount () {
        let {favID} = this.state
        
        favID.forEach(e => {
            this.getMovie(JSON.stringify(e))
        });
    }

    getMovie (id){

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(res => res.json())
        .then( res => 
            
            this.setState({
                movies : [...this.state.movies,res]
            })
        )
    }
    
    render() {
        const {movies} = this.state
        console.log(this.state.movies);
        // console.log(this.state.favID);
        return (
            <div>
                <h1>Favorites</h1>
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
        </div>
        )
    }
}

export default Favorites
