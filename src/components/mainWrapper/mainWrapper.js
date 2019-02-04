import React,{Component} from 'react';
import './mainWrapper.css';
import NavBar from '../navbar';

import Projects from '../projects';
import AboutMe from  '../aboutme';

class mainWrapper extends Component{

    constructor(props){
        super(props);
        this.state={
            current:'home',
            showHome:true,
            showProjects:false,
            showAboutMe:false
        }
    }



    handleBodyClick = (e)=>{
        e.stopPropagation();
        console.log(e.target.className)
        
        if(e.target.className=='mainWrapper'){
        this.setState({
            current:'home',
            showHome:true,
            showProjects:false,
            showAboutMe:false
        })
    }
    }

    handleClick=(e)=>{
        

        var targ = e.target.getAttribute("value");
        if(targ==1){
            e.target.style.animation='transition 1s';
            this.setState({
                current:'projects',
                showHome:false,
                showProjects:true,
                showAboutMe:false
            })
        }else if(targ==2){
            this.setState({
                current:'aboutMe',
                showHome:false,
                showProjects:false,
                showAboutMe:true
            })
        }else{
            this.setState({
                current:'home',
                showHome:true,
                showProjects:false,
                showAboutMe:false
            })   
        }

        
    }


    render(){
        return (
            <div className='mainWrapper' onClick = {this.handleBodyClick} style={{overflow:'auto'}}>
            {this.state.showHome?<NavBar current={this.state.current} handleClick={this.handleClick}/>:""}
            
        {this.state.showProjects?(
        <div className='main z-depth-5'>
            <div className='row'>
            <div className='col s12'>
            <NavBar current={this.state.current} handleClick={this.handleClick}/>
                </div>
                </div>
                <div class='row' style={{height:'50vh'}}>
                <div className='col s12' style={{height:'fit-content'}}>
                <Projects/>
                </div>
                </div>
                </div>):""}
        {this.state.showAboutMe?(
        <div className='main z-depth-5'>
        <div className='row'>
        <div className='col s12'>
        <NavBar current={this.state.current} handleClick={this.handleClick}/>
            </div>
            
            <div className = 'row'>
            <div className= 'col s4'>
            </div>
            <div className = 'col s8'>
            <AboutMe/>
            </div>
            </div>
            </div>
            </div>):""}
            
        </div>)
    }


}

export default mainWrapper;
