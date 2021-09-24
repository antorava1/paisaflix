import '../../styles/home/hero.css';
import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Stars from './Stars';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom"

export default class Hero extends Component {

    state = {
        hero: [],
    }

    async componentDidMount() {
        const res = await axios.get('https://paisa-challange.herokuapp.com/api/v1/paisaflix/hero')
        this.setState({hero: res.data.data})
        console.log(this.state.hero)
    }

    render() {
        const data = this.state.hero;
          
        const formattingTime= (minutes)=>{
            if( minutes.length >= 1 ) {

                return minutes.map( x => {
                    let min = x.duration;
                    let hours = Math.floor(min/60);
                    min = min % 60;

                    return `${hours}hr ${min} min`;
                })
            }
            else
            {
                let min = minutes.duration;
                let hours = Math.floor(min/60);
                min = min % 60;
                return `${hours}hr ${min} min`;
            }
        }
    
        const time = formattingTime(data);
    

        return (
            <>
                <div>
                    <div className="hero-body">
                        <h1 className="movie-title">{data.name}</h1>
                        <Stars/>
                        <h6 className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
                        <h6 className="movie-genre">Genre: {data.genre}</h6>
                        <h6 className="movie-duration">Duration: {time}</h6>
                        <h6 className="movie-rating">Rating: {data.rating}</h6>
                        <Link to="/landing"><Button className="btn">Watch Now</Button></Link>
                        <Cards/>
                    </div>
                    <div className="hero-image">
                            <img className="hero-bg" src={data.coverImage}  alt={data.name} ></img> 
                        </div>
                </div>
            </>
        )
    }
}
