import '../../styles/home/hero.css';
import React, { Component } from 'react';
import axios from 'axios';
import Cards from './Cards';
import Stars from './Stars';
import {Button} from 'react-bootstrap';

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
                        <div className="hero-image">
                            <img className="hero-bg" src={data.coverImage}  alt={data.name} ></img> 
                        </div>
                        <h1 className="movie-title">{data.name}</h1>
                        <Stars/>
                        <h6 className="movie-description">Al final del siglo XX, miles de hombres y mujeres dejaron la Tierra para conquistar el espacio y escapar de las grandes ciudades, que se habían vuelto inhabitables. En las colonias nació una nueva raza de esclavos androides llamados "Replicantes".</h6>
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
