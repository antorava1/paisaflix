import '../../styles/home/cards.css'
import React from 'react';
import { Card } from 'react-bootstrap';

function Cards () {
    return (
        <container>
            <h4 className="cards-title">Trailers</h4>
            <Card className="card">
                <Card.Img src="https://frikivilla.com/wp-content/uploads/2019/01/avengers-endgame-marvel-frikivilla.jpg"/>
                <Card.Body>
                    <Card.Text className="card-number">
                    01
                    </Card.Text>
                </Card.Body>
            </Card>
        </container>
    )
}

export default Cards;