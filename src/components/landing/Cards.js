import '../../styles/landing/cards.css'
import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';


export default class Cards extends Component {
    
    state = {
        trailers: [],
    }

    async componentDidMount() {
        const res = await axios.get('https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers/')
        this.setState({trailers: res.data.data})
        console.log(this.state.trailers)
    }

    

    render() {
        return (
            <div>
                <h4 className="cards-title">Trailers</h4>
                {this.state.trailers.map((data, i) => {    
                    return (
                        <div className="cards">
                            <Card className="card1" key={i}>
                                <Card.Img src={data.trailerImage}/>
                                <Card.Body>
                                    <Card.Text className="card-number">
                                    {`${i+1}`}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}