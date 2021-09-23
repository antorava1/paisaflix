import '../../styles/landing/hero.css';
import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Stars from './Stars';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom"

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
        return (
            <>
                <div>
                    <div>
                        <div className="lhero-image">
                            <img className="lhero-bg" src={data.coverImage}  alt={data.name} ></img> 
                        </div>
                        <Link to="/"><FontAwesomeIcon className="larrow-left" icon={faArrowLeft}/></Link>
                        <h1 className="movie-title">{data.name}</h1>
                        <Stars/>
                        <h6 className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
                        <h6 className="movie-genre">Genre: {data.genre}</h6>
                        <h6 className="movie-duration">Duration: {data.duration}</h6>
                        <h6 className="movie-rating">Rating: {data.rating}</h6>
                    </div>
                    <Button className="btn">Watch Now</Button>
                    <Cards/>
                </div>
            </>
        )
    }
}