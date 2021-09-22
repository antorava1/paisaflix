import '../../styles/home/cards.css'
import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';


export default class Cards extends Component {
    
    state = {
        trailers: [],
    }

    async componentDidMount() {
        const res = await axios.get('https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers')
        this.setState({trailers: res.data.data})
        //console.log(this.state.trailers)
    }

    

    render() {
        const data = this.state.trailers
        return (
            <div>
                <h4 className="cards-title">Trailers</h4>
                <Card className="card1">
                    <Card.Img src="https://frikivilla.com/wp-content/uploads/2019/01/avengers-endgame-marvel-frikivilla.jpg"/>
                    <Card.Body>
                        <Card.Text className="card-number">
                        01
                        </Card.Text>
                    </Card.Body>
                </Card>
                {/* <Card className="card2">
                    <Card.Img src="https://frikivilla.com/wp-content/uploads/2019/01/avengers-endgame-marvel-frikivilla.jpg"/>
                    <Card.Body>
                        <Card.Text className="card-number">
                        02
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card3">
                    <Card.Img src="https://frikivilla.com/wp-content/uploads/2019/01/avengers-endgame-marvel-frikivilla.jpg"/>
                    <Card.Body>
                        <Card.Text className="card-number">
                        03
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card4">
                    <Card.Img src="https://frikivilla.com/wp-content/uploads/2019/01/avengers-endgame-marvel-frikivilla.jpg"/>
                    <Card.Body>
                        <Card.Text className="card-number">
                        04
                        </Card.Text>
                    </Card.Body>
                </Card> */}
            </div>
        )
    }
}

