import React, {Component} from 'react';
import "./SideNav.css";
import ListItem from "../ListItem"
import Avatar from "../Avatar"
import calendarIcon from "../../icons/baseline-calendar_today-black-18/2x/baseline_calendar_today_black_18dp.png"
import listIcon from "../../icons/listItem/2x/baseline_list_black_18dp.png"
import addListIcon from "../../icons/addListIcon/2x/baseline_add_circle_outline_black_18dp.png"
import API from "../../utils/API"

class SideNav extends Component {

    state = {
        toDoLists: []
    }

    // When a user clicks on the button to add a list, the user should be able to add a list
    handleAddNewList = () => {
        // Create a variable for the new list
        const newListVariable = {
            listName: "New List",
            toDoItems: 0,
            type: "Private"
        }
        
        // Post the new list to the database
        API.addList(newListVariable);
        
        // this.setState({
        //    toDoLists: [...this.state.toDoLists, 'New List'] 
        // })
    }

    render() {
        return(
            <div className = "leftNav">
                <Avatar/>
                <ListItem 
                icon = {calendarIcon}
                listNameText = "Today"   
                >
                </ListItem>
                <ListItem
                icon = {listIcon}
                listNameText = "To Do"
                />
                <button id="addList"
                    onClick = {this.handleAddNewList}
                >
                    <img id="addListIcon" src={addListIcon} alt="Add List"/>
                </button>
            </div>
        )
    }
}

export default SideNav