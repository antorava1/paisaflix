import '../../styles/home/hero.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Cards from './Cards';
import Stars from './Stars';
import {Button} from 'react-bootstrap';


// 'https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers' 

const Hero = () => {

    /* getTrailers () {
        fetch('https://paisa-challange.herokuapp.com/api/v1/paisaflix')
          .then(res => res.json())
          .then(data => {
            console.log(data)
        })
    } */

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies')
            .then(response => response.json())
            .then(data => console.log(data));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

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