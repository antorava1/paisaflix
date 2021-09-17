import '../styles/featured.css';
import React from 'react';
import { Card, Badge } from 'react-bootstrap';

function Featured () {
    return (
        <container>
            <h4 className="title">Featured</h4>
            <Card className="first-movie">
                <Badge className="badge1">Género</Badge>
                <Card.Text className="duration1">1hr 24mins</Card.Text>
                <Card.Text className="views1">21.3K views</Card.Text>
                <Card.Title className="title1">Star Wars - The Last Jedi</Card.Title>
            </Card>
            <Card className="second-movie">
                <Badge className="badge2">Género</Badge>
                <Card.Text className="duration2">1hr 24mins</Card.Text>
                <Card.Text className="views2">21.3K views</Card.Text>
                <Card.Title className="title2">Triggered</Card.Title>
            </Card>
            <Card className="third-movie">
                <Badge className="badge3">Género</Badge>
                <Card.Text className="duration3">1hr 24mins</Card.Text>
                <Card.Text className="views3">21.3K views</Card.Text>
                <Card.Title className="title3">Matrix</Card.Title>
            </Card>
            <Card className="fourth-movie">
                <Badge className="badge4">Género</Badge>
                <Card.Text className="duration4">1hr 24mins</Card.Text>
                <Card.Text className="views4">21.3K views</Card.Text>
                <Card.Title className="title4">Dunkirk</Card.Title>
            </Card>
            <Card className="fifth-movie">
                <Badge className="badge5">Género</Badge>
                <Card.Text className="duration5">1hr 24mins</Card.Text>
                <Card.Text className="views5">21.3K views</Card.Text>
                <Card.Title className="title5">Don't Breathe</Card.Title>
            </Card>
        </container>
    )
}

export default Featured;