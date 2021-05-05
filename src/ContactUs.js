import React from 'react';
import Logo from './images/logo.png';

class ContactUs extends React.Component{
    render(){
        return(
            <div className="contactus" id="ContactUs">
                <div className="myLogo">
                <img src={Logo}/>
                <div className="quote">Learning Everyday ...</div>
                </div>
                <div className="socialmedias">
                <a href="https://www.facebook.com/aashizzpoudel01/"><i class="fab fa-facebook"/></a>
                <a href="https://www.linkedin.com/in/ashish-poudel-500861193/"><i class="fab fa-linkedin-in"/></a>
                <a href="https://www.instagram.com/aashizzpoudel01/"><i class="fab fa-instagram"/></a>
                <a href="https://twitter.com/aashizzpoudel01"><i class="fab fa-twitter"/></a>
                <a href="https://github.com/ashishpoudel995"><i class="fab fa-github"/></a>
                <a href="mailto:ashishpoudel995@gmail.com"><i class="far fa-envelope"/></a>
                </div>
            </div>
        )
    }
}

export default ContactUs;