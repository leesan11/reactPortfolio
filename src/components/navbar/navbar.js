import React, { Component } from 'react';
import "./navbar.css"

class navbar extends Component{
   constructor(props){
       super(props);
       this.state={
           depth:['1','1','1']
       }
   }

    handleHover(e){
        e.stopPropagation();
        var arr =this.state.depth;
        
        arr[e.target.getAttribute('value')]='5';
        this.setState({
            depth:arr
        })
        // this.classList.add('z-depth-5');
    }
    handleLeaveHover(e){
        e.stopPropagation();
        var arr =this.state.depth;
        arr[e.target.getAttribute('value')]='1';
        this.setState({
            depth:arr
        })
    }

    render(){

        return (
            <div className='contain-navbar'>
                <p className={`menu-button z-depth-${this.state.depth[0]}`} value='0' onMouseEnter ={this.handleHover.bind(this)} onMouseLeave={this.handleLeaveHover.bind(this)}>Home</p>
                <p className={`menu-button z-depth-${this.state.depth[1]}`} value='1' onMouseEnter ={this.handleHover.bind(this)} onMouseLeave={this.handleLeaveHover.bind(this)}>Projects</p>
                <p className={`menu-button z-depth-${this.state.depth[2]}`} value='2' onMouseEnter ={this.handleHover.bind(this)} onMouseLeave={this.handleLeaveHover.bind(this)}>About Me</p>
            </div>
        )

    }

};

export default navbar;
