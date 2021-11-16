import React, { Component } from 'react'
import moment from 'moment';


class WeeklyBattle extends Component {
    
    constructor () {
        super()

        this.state = {
            movies : [],
            currentBattle : 0,
            favorite : []
        }
        this.moviesBattle = this.moviesBattle.bind(this)
        this.clearAll = this.clearAll.bind(this)
    }

    componentDidMount(){

        const lastWeek = moment().subtract(1, 'week').calendar()
        const realTime = moment(lastWeek).format('YYYY-MM-DD')
        const nowTime = moment().format('YYYY-MM-DD')

        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${realTime}&primary_release_date.lte=${nowTime}&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(res => res.json())
        .then( res => 

            this.setState({
                movies : res.results
            })
        )
    }

    moviesBattle (i) {
        
        const {currentBattle, favorite,movies} = this.state

        if(currentBattle === movies.length - 2){
            alert('Vous avec parcourus tous les films, GG !')
        }
        else{
            this.setState({
                currentBattle : this.state.currentBattle += 2,
                favorite : [...favorite,i]
            })
        }
    }

    clearAll (){

        this.setState({
            currentBattle : 0,
            favorite : []
        })

        localStorage.clear()
    }

    render() {
        const {movies, currentBattle,favorite} = this.state
        localStorage.setItem('Weekly-Favorites', JSON.stringify(favorite));

        return (
            <div className='all-battle-cards'>

                <h1>Popular-Battle</h1>

                <button onClick={this.clearAll}>Clear</button>
                <div className="battle">
                {movies.map( (e,i) => {

                    if (i === currentBattle || i === currentBattle +1){
                        return(
                            <div className="battle-cards" key={e.id + e.original_title} onClick={ () => this.moviesBattle(e.id)}>
                                <h2>{e.title}</h2>
                                <img src={`https://image.tmdb.org/t/p/w300/${e.poster_path}`} alt="img" style={{width : '50%'}} />
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

export default WeeklyBattle
