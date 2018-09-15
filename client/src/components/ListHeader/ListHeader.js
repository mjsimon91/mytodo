import React, {Component} from 'react'
import './ListHeader.css'

class ListHeader extends Component {
    render(){
        return(
            <div className = 'listHeader'>
                {this.props.listName.map((userList, i) => {
                    <h1 key={i}>{userList.listName}</h1>
                })}
            </div>
        )
    }
}

export default ListHeader