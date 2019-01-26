import React,{Component} from 'react';
import './mainWrapper.css';
import NavBar from '../navbar';
import Main from '../main';
import Projects from '../projects';

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
        }

        
    }


    render(){
        return (
            <div className='mainWrapper'>
            {this.state.showHome?<NavBar current={this.state.current} handleClick={this.handleClick}/>:""}
        {this.state.showProjects?<Projects/>:""}
            </div>
        )
    }


}

export default mainWrapper;
