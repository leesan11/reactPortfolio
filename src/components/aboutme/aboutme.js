import React, {Component} from 'react';
import './aboutme.css'
import NavBar from '../navbar';

class aboutme extends Component{

componentDidMount(){

    document.getElementsByClassName('about-me')[0].parentElement.parentElement.parentElement.parentElement.style.animation="fadeIn 3s 1";
}

    render(){
        return(
            <div className='about-me'>
                <h4>About Me</h4>
                <p>My name is John Lee and I am a Full Stack MERN Web Developer! I have been coding for 5 years. This site has been created with React. Please take a look at my portfolio!</p>
            </div>
        )
    }
}
export default aboutme;