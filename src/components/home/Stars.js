import '../../styles/home/hero.css';
import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Stars () {
    return (
            <div>
                <FontAwesomeIcon icon={faStar} className="star1"/>
                <FontAwesomeIcon icon={faStar} className="star2"/>
                <FontAwesomeIcon icon={faStar} className="star3"/>
                <FontAwesomeIcon icon={faStar} className="star4"/>
                <FontAwesomeIcon icon={faStar} className="star5"/>
            </div>
    )
}

export default Stars;