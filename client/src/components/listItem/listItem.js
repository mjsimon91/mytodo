import React, {Component} from "react"
import "./ListItem.css"

// Creating a component that will be a list item where the list contains items that need to be done. They will have some user entered text and an icon
class ListItem extends Component {
    render() {
        return(
            // Map each item to a list in the database
            <button>
                <div className="listItemContainer">
                    {/* Add the icon to the div */}
                    <div className ="iconDiv">
                        <img className="iconImg" alt="" src={this.props.icon}></img>
                    </div>

                    {/* Name of the List */}
                    <div className="listName">
                        <p className="listText">{this.props.listNameText}</p>
                    </div>

                </div>
            </button>
            
        )
    }
}

export default ListItem