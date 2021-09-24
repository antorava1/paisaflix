import '../../styles/landing/footer.css';
import React from 'react';
import location from '../../assets/icons/location.svg';
import mail from '../../assets/icons/mail.svg';
import phone from '../../assets/icons/phone.svg';
import arrowright from '../../assets/icons/arrowright.svg';

function Footer () {
    return(
        <footer>
            <section className="section1">
                <h4 className="lfooter-title">Paisaflix</h4>
                <h6 className="lfooter-subtitle">Join Newsletters</h6>
                <div className="linput">
                    <h5 className="linput-text">Insert your mail here</h5>
                    <div className="linput-rectangle">
                    <img  src={arrowright} className="arrow-right" alt="larrow-right"/>
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
                    <img  src={location} className="llocation" alt="location"/>
                    <h5 className="lsub11"> 8819 Enrique Martinez, Bs As., 90280 </h5>
                </div>
                <div className="label-info2">
                    <img  src={mail} className="lemail" alt="email"/>
                    <h5 className="lsub12"> hola@paisanos.io </h5>
                </div>
                <div className="label-info3">
                    <img  src={phone} className="lphone" alt="phone"/>
                    <h5 className="lsub13"> +271 386-647-3637 </h5>
                </div>
            </section>
        </footer>
    )
}

export default Footer;