import '../../styles/home/cards.css'
import React from 'react';
import { Card } from 'react-bootstrap';

const Cards = ({trailerImage}) => {
    return (
        <div>
            <h4 className="cards-title">Trailers</h4>
            <Card className="card">
                <Card.Img src={trailerImage}/>
                <Card.Body>
                    <Card.Text className="card-number">
                    01
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;