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
        return(
            <div>
                <h4 className="featured-title">Featured</h4>
                <h4 className="view-more">View More</h4>
                {this.state.movies.map((data, i) => {    
                    return (
                        <>
                            <Card className="first-movie" key={i}>
                                <Badge className="badge1">{data.genre}</Badge>
                                <Card.Text className="duration1">
                                    <FontAwesomeIcon className="clock1" icon={faClock} />&nbsp;
                                    {data.duration} mins
                                </Card.Text>

                                <Card.Text className="views1">
                                    <FontAwesomeIcon className="eye1" icon={faEye} />&nbsp;
                                    {data.views} views
                                </Card.Text>
                                <Card.Title className="movie-title1">{data.name}</Card.Title>
                            </Card>
                            <Card className="second-movie" key={data._id}>
                                <Badge className="badge2">{data.genre}</Badge>
                                <Card.Text className="duration2">
                                    <FontAwesomeIcon classname="clock1" icon={faClock} />&nbsp;
                                    {data.duration} mins
                                </Card.Text>

                                <Card.Text className="views1">
                                    <FontAwesomeIcon className="eye1" icon={faEye} />&nbsp;
                                    {data.views} views
                                </Card.Text>
                                <Card.Title className="movie-title2">{data.name}</Card.Title>
                            </Card>
                            <Card className="third-movie" key={data.name}>
                                <Badge className="badge3">{data.genre}</Badge>
                                <Card.Text className="duration3">
                                    <FontAwesomeIcon className="clock1" icon={faClock} />&nbsp;
                                    {data.duration} mins
                                </Card.Text>

                                <Card.Text className="views1">
                                    <FontAwesomeIcon className="eye1" icon={faEye} />&nbsp;
                                    {data.views} views
                                </Card.Text>
                                <Card.Title className="movie-title3">{data.name}</Card.Title>
                            </Card>
                            <Card className="fourth-movie" key={data.name}>
                                <Badge className="badge4">{data.genre}</Badge>
                                <Card.Text className="duration4">
                                    <FontAwesomeIcon classname="clock1" icon={faClock} />&nbsp;
                                    {data.duration} mins
                                </Card.Text>

                                <Card.Text className="views1">
                                    <FontAwesomeIcon className="eye1" icon={faEye} />&nbsp;
                                    {data.views} views
                                </Card.Text>
                                <Card.Title className="movie-title4">{data.name}</Card.Title>
                            </Card>
                            <Card className="fifth-movie" key={data.name}>
                                <Badge className="badge5">{data.genre}</Badge>
                                <Card.Text className="duration5">
                                    <FontAwesomeIcon classname="clock1" icon={faClock} />&nbsp;
                                    {data.duration} mins
                                </Card.Text>
                                <Card.Text className="views1">
                                    <FontAwesomeIcon className="eye1" icon={faEye} />&nbsp;
                                    {data.views} views
                                </Card.Text>
                                <Card.Title className="movie-title5">{data.name}</Card.Title>
                            </Card>
                        </>
                    )
                })}
            </div>
        )
    }
}