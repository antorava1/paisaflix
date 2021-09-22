import '../../styles/landing/footer.css';
import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Footer () {
    return(
        <footer>
            <section className="section1">
                <h4 className="lfooter-title">Paisaflix</h4>
                <h6 className="lfooter-subtitle">Join Newsletters</h6>
                <div className="linput">
                    <h5 className="linput-text">Insert your mail here</h5>
                    <div className="linput-rectangle">
                        <FontAwesomeIcon icon={faArrowRight} className="larrow-right"/>
                    </div>
                </div>
            </section>
            <section className="section2">
                <h4 className="lproduct">Product</h4>
                <h5 className="lsub2">Movies</h5>
                <h5 className="lsub3">TV Show</h5>
                <h5 className="lsub4">Videos</h5>
            </section>
            <section className="section3">
                <h4 className="lmgroup">Media Group</h4>
                <h5 className="lsub5">Nice Studio</h5>
                <h5 className="lsub6">Nice News</h5>
                <h5 className="lsub7">Nice TV</h5>
            </section>
            <section className="section4">
                <h4 className="lsitemap">Sitemap</h4>
                <h5 className="lsub8">About</h5>
                <h5 className="lsub9">Careers</h5>
                <h5 className="lsub10">Press</h5>
            </section>
            <section className="section5">
                <div className="label-info1">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="llocation"/>
                    <h5 className="lsub11"> 8819 Enrique Martinez, Bs As., 90280 </h5>
                </div>
                <div className="label-info2">
                    <FontAwesomeIcon icon={faEnvelope} className="lemail"/>
                    <h5 className="lsub12"> hola@paisanos.io </h5>
                </div>
                <div className="label-info3">
                    <FontAwesomeIcon icon={faPhoneAlt} className="lphone"/>
                    <h5 className="lsub13"> +271 386-647-3637 </h5>
                </div>
            </section>
        </footer>
    )
}

export default Footer;