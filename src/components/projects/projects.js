import React, {Component} from 'react';
import './projects.css'
import NavBar from '../navbar';

class projects extends Component{

    render(){
        return(
            <div className='main z-depth-5'>
            <div className='row'>
            <div className='col s6'>
                <NavBar/>
                </div>
                <div className='col s6'>
                <div className='project-space z-depth-5'>
                
                </div>
                <div className='project-space z-depth-5'>
                
                </div>
                <div className='project-space z-depth-5'>
                
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default projects;