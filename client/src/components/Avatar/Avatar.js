import React, {Component} from 'react'
import "./Avatar.css"

//Creating a component for the user Avatar which will have the name of the person who is logged in and their picture
class Avatar extends Component {
    render(){
        return(
            <div className="row">
                <div className="avatar">
                    <div className= "avatarDiv col-1-xl">
                        <img className="userAvatar" alt="" src="https://via.placeholder.com/32x32"></img>
                    </div>
                    <div className="userNameDiv col-10-xl">
                        <h3 className="userName">Matthew Simon</h3>
                    </div>
                    
                </div>
            </div>
            
        )
    }  
}

export default Avatar