import React, { Component } from 'react';
import "./navbar.css"

class navbar extends Component{
   constructor(props){
       super(props);
       
       this.state={
           depth:['1','1','1']
       }
   }
   handleClick(e){
        
      e.target.style.animation='transition 1s';
      
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
            <div className={this.props.current=='home'?'contain-navbar':'contain-navbar-modal'}>
                <p className={this.props.current=='home'?'menu-button'+` home z-depth-${this.state.depth[0]} ${this.props.current=='home'?'inactive':""}`:"menu-button-modal"+` home z-depth-${this.state.depth[0]} ${this.props.current=='home'?'inactive':""}`} value='0' onClick = {this.props.handleClick} onMouseEnter ={this.handleHover.bind(this)} onMouseLeave={this.handleLeaveHover.bind(this)}>Home</p>
                <p className={this.props.current=='home'?'menu-button'+` projects z-depth-${this.state.depth[0]} ${this.props.current=='projects'?'inactive':""}`:"menu-button-modal"+` projects z-depth-${this.state.depth[0]} ${this.props.current=='projects'?'inactive':""}`} value='1' onClick = {this.props.handleClick} onMouseEnter ={this.handleHover.bind(this)} onMouseLeave={this.handleLeaveHover.bind(this)}>Portfolio</p>
                <p className={this.props.current=='home'?'menu-button'+` aboutMe z-depth-${this.state.depth[0]} ${this.props.current=='projects'?'inactive':""}`:"menu-button-modal"+` aboutMe z-depth-${this.state.depth[0]} ${this.props.current=='aboutMe'?'inactive':""}`} value='2' onClick = {this.props.handleClick} onMouseEnter ={this.handleHover.bind(this)} onMouseLeave={this.handleLeaveHover.bind(this)}>About Me</p>
            </div>
        )

    }

};

export default navbar;
