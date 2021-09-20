import '../styles/footer.css';
import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Footer () {
    return(
        <footer>
            <section className="section1">
                <h4 className="footer-title">Paisaflix</h4>
                <h6 className="footer-subtitle">Join Newsletters</h6>
                <InputGroup className="input">
                    <FormControl className="form-text" placeholder="Insert your mail here" aria-label="insert your mail here"/>
                    <Button className="btn-input"></Button>
                </InputGroup>
            </section>
            <section className="section2">
                <h4 className="product">Product</h4>
                <h5 className="sub2">Movies</h5>
                <h5 className="sub3">TV Show</h5>
                <h5 className="sub4">Videos</h5>
            </section>
            <section className="section3">
                <h4 className="mgroup">Media Group</h4>
                <h5 className="sub5">Nice Studio</h5>
                <h5 className="sub6">Nice News</h5>
                <h5 className="sub7">Nice TV</h5>
            </section>
            <section className="section4">
                <h4 className="sitemap">Sitemap</h4>
                <h5 className="sub8">About</h5>
                <h5 className="sub9">Careers</h5>
                <h5 className="sub10">Press</h5>
            </section>
            <section className="section5">
                <div className="label-info1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="location"/>
                    <h5 className="sub11"> 8819 Enrique Martinez, Bs As., 90280 </h5>
                </div>
                <div className="label-info2">
                    <FontAwesomeIcon icon={faEnvelope} className="email"/>
                    <h5 className="sub12"> hola@paisanos.io </h5>
                </div>
                <div className="label-info3">
                    <FontAwesomeIcon icon={faPhoneAlt} className="phone"/>
                    <h5 className="sub13"> +271 386-647-3637 </h5>
                </div>
            </section>
        </footer>
    )
}

export default Footer;