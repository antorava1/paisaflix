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
    }

    

    render() {
        return (
            <div>
                <h4 className="cards-title-l">Trailers</h4>
                <div className="row-l">
                    {this.state.trailers.map((data, i) => {    
                        return (
                            <div className="col-md-1">
                                <Card className="card-l" key={i}>
                                    <Card.Img src={data.trailerImage}/>
                                    <Card.Body>
                                        <Card.Text className="card-number-l">
                                        {`${i+1}`}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}