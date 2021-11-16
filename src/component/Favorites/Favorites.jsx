import React, { Component } from 'react'

class Favorites extends Component {
    constructor ( ){
        super()

        this.state = {
            movies : [],
            popularFav : JSON.parse(localStorage.getItem('Popular-Favorites')),
            weeklyFav : JSON.parse(localStorage.getItem('Weekly-Favorites'))
        }
        this.getMovie = this.getMovie.bind(this)
    }

    componentDidMount () {
        
        this.state.popularFav.forEach(e => {
            if(!e){
                console.log('Error');
            }
            else{
                this.getMovie(JSON.stringify(e))
            }
        });

        this.state.weeklyFav.forEach(e => {
            if(!e){
                console.log('Error');
            }
            else{
                this.getMovie(JSON.stringify(e))
            }
        })
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
        console.log(this.state.popularFav);
        // console.log(this.state.favID);
        return (
            <div>
                <h1>Favorites</h1>
                <div className='all-movies'>
                {movies.map(e => (
                    <div className="movies-card" key={e.id + e.original_title}>
                        <h2>{e.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`} alt='img' style={{width : '50%'}} />
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
