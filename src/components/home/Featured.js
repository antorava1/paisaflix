import '../../styles/home/featured.css';
import React, {Component} from 'react';
import axios from 'axios';
import { Card, Badge } from 'react-bootstrap';
import clock from '../../assets/icons/clock.svg';
import eye from '../../assets/icons/eye.svg';


export default class Featured extends Component {
    
    state = {
        movies: [],
    }

    async componentDidMount() {
        const res = await axios.get('https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies')
        this.setState({movies: res.data.data})
        console.log(this.state.movies)
    }

    render() {

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

        return (
            <div>
                <h4 className="featured-title">Featured</h4>
                <h4 className="view-more">View More</h4>
                <div className="featured-cards">
                    {this.state.movies.map((data, i) => {   
                        const movieTime = formattingTime(data);
                        return (
                            <div className={"movie-id-"+ i}>
                                <Card className="movie-card" key={data._id}>
                                    <Badge className={"badge-id-"+ i}>{data.genre}</Badge>
                                    <Card.Text className={"duration-id-"+ i}>
                                    <img  src={clock} className="clock1" alt="clock"/>&nbsp;
                                        {movieTime}
                                    </Card.Text>
                                    
                                    <Card.Text className={"views-id-"+ i}>
                                    <img  src={eye} className="eye1" alt="eye"/>&nbsp;
                                        {data.views} views
                                    </Card.Text>
                                        <Card.Title className={"movie-title-id-"+ i}>{data.name}</Card.Title>
                               </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}