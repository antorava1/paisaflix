import '../styles/featured.css';
import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';

function Featured () {
    return (
        <container>
            <h4 className="featured-title">Featured</h4>
            <h4 className="view-more">View More</h4>
            <Card className="first-movie">
                <Badge className="badge1">Género</Badge>
                <Card.Text className="duration1">
                    <FontAwesomeIcon classname="clock1" icon={faClock}/>&nbsp;
                    1hr 24mins
                </Card.Text>
                
                <Card.Text className="views1">
                    <FontAwesomeIcon className="eye1" icon={faEye}/>&nbsp;
                    21.3K views
                </Card.Text>
                <Card.Title className="movie-title1">Star Wars - The Last Jedi</Card.Title>
            </Card>
            <Card className="second-movie">
                <Badge className="badge2">Género</Badge>
                <Card.Text className="duration2">
                    <FontAwesomeIcon classname="clock1" icon={faClock}/>&nbsp;
                    1hr 24mins
                </Card.Text>
                
                <Card.Text className="views1">
                    <FontAwesomeIcon className="eye1" icon={faEye}/>&nbsp;
                    21.3K views
                </Card.Text>
                <Card.Title className="movie-title2">Triggered</Card.Title>
            </Card>
            <Card className="third-movie">
                <Badge className="badge3">Género</Badge>
                <Card.Text className="duration3">
                    <FontAwesomeIcon classname="clock1" icon={faClock}/>&nbsp;
                    1hr 24mins
                </Card.Text>
                
                <Card.Text className="views1">
                    <FontAwesomeIcon className="eye1" icon={faEye}/>&nbsp;
                    21.3K views
                </Card.Text>
                <Card.Title className="movie-title3">Matrix</Card.Title>
            </Card>
            <Card className="fourth-movie">
                <Badge className="badge4">Género</Badge>
                <Card.Text className="duration4">
                    <FontAwesomeIcon classname="clock1" icon={faClock}/>&nbsp;
                    1hr 24mins
                </Card.Text>
                
                <Card.Text className="views1">
                    <FontAwesomeIcon className="eye1" icon={faEye}/>&nbsp;
                    21.3K views
                </Card.Text>
                <Card.Title className="movie-title4">Dunkirk</Card.Title>
            </Card>
            <Card className="fifth-movie">
                <Badge className="badge5">Género</Badge>
                <Card.Text className="duration5">
                    <FontAwesomeIcon classname="clock1" icon={faClock}/>&nbsp;
                    1hr 24mins
                </Card.Text>

                <Card.Text className="views1">
                    <FontAwesomeIcon className="eye1" icon={faEye}/>&nbsp;
                    21.3K views
                </Card.Text>
                <Card.Title className="movie-title5">Don't Breathe</Card.Title>
            </Card>
        </container>
    )
}

export default Featured;