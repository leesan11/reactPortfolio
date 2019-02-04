import React, { Component } from 'react';
import './projects.css'
import NavBar from '../navbar';
import createworksheet from "../../assets/images/createworksheet.jpg";
class projects extends Component {

    render() {
        return (
            <div class='row contain-projects'>

                <div class='row'>
                   
                    <div class='col s12'>
                        <a href="http://createworksheet.com">
                            <div className='project-space z-depth-5' style={{ backgroundImage: `url(${createworksheet})`, backgroundSize: 'cover' }}>
                            <div style={{height:'70%'}}></div>
                            <p class='text card'>Project developed solely by me. The project uses PDFKit, Nodejs, Firebase, JQuery, and Materialize</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class='row'>
                    <div className='project-space z-depth-5'>

                    </div>

                </div>

            </div>)
    }
}
export default projects;