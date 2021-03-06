import '../../styles/home/footer.css';
import React from 'react';
import location from '../../assets/icons/location.svg';
import mail from '../../assets/icons/mail.svg';
import phone from '../../assets/icons/phone.svg';
import arrowright from '../../assets/icons/arrowright.svg';



function Footer () {
    return(
        <footer>
            <section className="section1">
                <h4 className="footer-title">Paisaflix</h4>
                <h6 className="footer-subtitle">Join Newsletters</h6>
                <div className="input">
                    <h5 className="input-text">Insert your mail here</h5>
                    <div className="input-rectangle">
                        <img  src={arrowright} className="arrow-right" alt="arrow-right"/>
                    </div>
                </div>
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
                    <img  src={location} className="location" alt="location"/>
                    <h5 className="sub11"> 8819 Enrique Martinez, Bs As., 90280 </h5>
                </div>
                <div className="label-info2">
                    <img  src={mail} className="email" alt="email"/>
                    <h5 className="sub12"> hola@paisanos.io </h5>
                </div>
                <div className="label-info3">
                    <img  src={phone} className="phone" alt="phone"/>
                    <h5 className="sub13"> +271 386-647-3637 </h5>
                </div>
            </section>
        </footer>
    )
}

export default Footer;