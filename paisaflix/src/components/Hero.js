import '../styles/hero.css';
import React from 'react';
import Cards from './Cards';
import Stars from './Stars';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Hero () {
    return (
        <>
            <div>
                <div>
                    <h1 className="movie-title">Blade Runner</h1>
                    <Stars/>
                    <h6 className="movie-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h6>
                    <h6 className="movie-genre">Genre: Action</h6>
                    <h6 className="movie-duration">Duration: 2 hr 45 mins</h6>
                    <h6 className="movie-rating">Rating: 4.5</h6>
                </div>
                <Button className="btn">Watch Now</Button>
            </div>
            <Cards />
        </>
    )
}

export default Hero;