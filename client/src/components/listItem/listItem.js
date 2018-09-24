import React, {Component} from "react"
import "./ListItem.css"

// Creating a component that will be a list item where the list contains items that need to be done. They will have some user entered text and an icon
class ListItem extends Component {
    render() {
        return(
            <div className="row">
                {/* Map each item to a list in the database */}
                <button className="col-12">
                    <div className="listItemContainer">
                        {/* Add the icon to the div */}
                        <div className ="iconDiv col-1">
                            <img className="iconImg" alt="" src={this.props.icon}></img>
                        </div>

                        {/* Name of the List */}
                        <div className="listName col-10">
                            <p className="listText">{this.props.listNameText}</p>
                        </div>

                    </div>
                </button>
            </div>
            
            
        )
    }
}

export default ListItem