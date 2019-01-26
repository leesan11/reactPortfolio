import React,{Component} from 'react';
import './mainWrapper.css';
import NavBar from '../navbar';
import Main from '../main';

class mainWrapper extends Component{

    constructor(props){
        super(props);
        this.state={
            showProjects:false,
            showHome:true,
            showAboutMe:false
        }
    }
    handleClick=()=>{
        this.setState({
            showProjects:true
        })
    }


    render(){
        return (
            <div className='mainWrapper'>
            <NavBar handleClick={this.handleClick}/>
        {this.state.showProjects?<Main/>:""}
            </div>
        )
    }


}

export default mainWrapper;
