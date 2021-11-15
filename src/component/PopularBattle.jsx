import React, { Component } from 'react'

import img from '../assets/film-img.png'

export class PopularBattle extends Component {
    
    constructor () {
        super()

        this.state = {
            movies : [],
            currentBattle : 0
        }
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

    render() {
        const {movies} = this.state
        return (
            <div>
                <h1>Popular-Battle</h1>
                {/* {movies[1].map(e => (
                    <div>
                        <h4>{e.title}</h4>
                        <img src={img} alt="" style={{width : '30%'}} />
                        <p>Date : {e.release_date}</p>
                        <p>Overview : <br />{e.overview}</p>
                    </div>
                ))}
                {movies[2].map(e => (
                    <div>
                        <h4>{e.title}</h4>
                        <img src={img} alt="" style={{width : '30%'}} />
                        <p>Date : {e.release_date}</p>
                        <p>Overview : <br />{e.overview}</p>
                    </div>
                ))} */}
            </div>
        )
    }
}

export default PopularBattle
