import React from 'react';
import Logo from './images/logo.png';
import Resume from './files/Resume.pdf';

class NavigationBar extends React.Component{
    render(){
        return(
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark">
                    <a class="navbar-brand" href="#"><img src={Logo}/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                      <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#Projects">Projects</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href={Resume} target="_new"><i class="far fa-file-pdf"></i>&nbsp;Resume</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#ContactUs">Say Hello&nbsp;<i class="material-icons">waving_hand</i></a>
                        </li>
                      </ul>
                    </div>
                  </nav>
            </div>
        )
    }
}

export default NavigationBar;