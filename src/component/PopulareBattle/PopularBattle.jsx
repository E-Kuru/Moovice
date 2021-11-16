import React, { Component } from 'react'

import './populare-battle.css'

export class PopularBattle extends Component {
    
    constructor () {
        super()

        this.state = {
            movies : [],
            currentBattle : 0,
            favorite : []
        }
        this.moviesBattle = this.moviesBattle.bind(this)
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f')
        .then(res => res.json())
        .then( res => 
            
            this.setState({
                movies : res.results
            })
        )
    }

    moviesBattle (i) {
        
        console.log(i);
        const {currentBattle, favorite} = this.state

        if(currentBattle === 18){
            alert('Vous avec parcourus tous les films, GG !')
            this.setState({
                currentBattle : 0
            })
        }
        else{
            this.setState({
                currentBattle : this.state.currentBattle += 2,
                favorite : [...favorite,i]
            })
            // localStorage.clear()
        }
    }

    render() {
        const {movies, currentBattle,favorite} = this.state
        localStorage.setItem('favorite', JSON.stringify(favorite));

        return (
            <div className='all-battle-cards'>

                <h1>Popular-Battle</h1>
                <div className="battle">
                {movies.map( (e,i) => {

                    if (i === currentBattle || i === currentBattle +1){
                        return(
                            <div className="battle-cards" key={e.id + e.original_title} onClick={ () => this.moviesBattle(e.id)}>
                                <h2>{e.title}</h2>
                                <img src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`} alt="image" style={{width : '50%'}} />
                                <p>Date : {e.release_date}</p>
                                <p>Overview : <br />{e.overview}</p>
                            </div>
                        )
                    }
                })}
                </div>
            </div>
        )
    }
}

export default PopularBattle
