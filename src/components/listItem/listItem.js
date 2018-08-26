import React, {Component} from "react"
import DarkIcon from "../../icons/baseline-calendar_today-black-18/2x/baseline_calendar_today_black_18dp.png"

// Creating a component that will be a list item where the list contains items that need to be done. They will have some user entered text and an icon
class ListItem extends Component {
    render() {
        return(
            // Map each item to a list in the database

            <div className="listItemContainer">
                {/* Add the icon to the div */}
                <div class = "icon">
                    <img src={DarkIcon}></img>
                </div>

                {/* Name of the List */}
                <div className="listName">
                    <h1>Text</h1>
                </div>

            </div>
        )
    }
}

export default ListItem