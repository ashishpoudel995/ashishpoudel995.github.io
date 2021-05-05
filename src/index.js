import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro';
import NavigationBar from './NavigationBar';
import Projects from './Projects/Projects';
import {Projectlists} from './Projects/Projectlists';
import ContactUs from './ContactUs';

const App=()=>{
    return(
        <div>
            <NavigationBar/>
            <Intro/>
            <Projects Projectlists={Projectlists}/>
            <ContactUs/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)