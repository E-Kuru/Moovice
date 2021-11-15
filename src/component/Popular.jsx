import React, { Component } from 'react'

import Card from './cards/Card'

export class Popular extends Component {
    constructor () {
        super()

        this.state = {
            movies : []
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
        // console.log(this.state.movies);
        return (
            <div>
                <Card movies={this.state.movies}/>
            </div>
        )
    }
}

export default Popular
