import '../../styles/home/featured.css';
import React, {Component} from 'react';
import axios from 'axios';
import { Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';


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
        return (
            <div>
                <h4 className="featured-title">Featured</h4>
                <h4 className="view-more">View More</h4>
                <div className="featured-cards">
                    {this.state.movies.map((data, i) => {    
                        return (
                            <div className={"movie-item-"+ i}>
                                <div className="movie-item">
                                    <Card className="trailer-card" key={i}>
                                    <img src={data.coverImage} className="featured-img" alt={data.name}></img>
                                        <Badge className={"badge-item-"+ i}>{data.genre}</Badge>
                                        <Card.Text className={"duration-item-"+ i}>
                                            <FontAwesomeIcon className="clock1" icon={faClock}/>&nbsp;
                                            {data.duration} mins
                                        </Card.Text>
                                        
                                        <Card.Text className={"views-item-"+ i}>
                                            <FontAwesomeIcon className="eye1" icon={faEye}/>&nbsp;
                                            {data.views} views
                                        </Card.Text>
                                        <Card.Title className={"movie-title-item-"+ i}>{data.name}</Card.Title>
                                    </Card>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}