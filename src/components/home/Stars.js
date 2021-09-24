import '../../styles/home/hero.css';
import React from 'react';
import star from '../../assets/imgs/star.png';

function Stars () {
    return (
            <div>
                <img  src={star} className="star1" alt=""/>
                <img  src={star} className="star2" alt=""/>
                <img  src={star} className="star3" alt=""/>
                <img  src={star} className="star4" alt=""/>
                <img  src={star} className="star5" alt=""/>
            </div>
    )
}

export default Stars;