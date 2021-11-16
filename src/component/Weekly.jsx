import React, { Component } from 'react'

import moment from 'moment';

import Card from './cards/Card'

export class Weekly extends Component {

    constructor () {
        super()

        this.state = {
            movies : []
        }
    }

    componentDidMount(){
        
        const lastWeek = moment().subtract(1, 'week').calendar()
        const nowTime = moment('fr').format('DD-MM-YYYY')
        const realTime = moment(lastWeek).format('DD-MM-YYYY')

        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${realTime}&primary_release_date.lte=${nowTime}&api_key=74ff4d5b18f55c304a239fadf716fe2f`)
        .then(res => res.json())
        .then( res => 
            
            this.setState({
                movies : res.results
            })
        )
    }

    
    render() {
        return (
            <div>
                <h1>Weekly</h1>
                <Card movies={this.state.movies}/>
            </div>
        )
    }
}

export default Weekly
