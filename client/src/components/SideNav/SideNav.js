import React, {Component} from 'react';
import "./SideNav.css";
import ListItem from "../ListItem"
import Avatar from "../Avatar"
import calendarIcon from "../../icons/baseline-calendar_today-black-18/2x/baseline_calendar_today_black_18dp.png"
import listIcon from "../../icons/listItem/2x/baseline_list_black_18dp.png"
import addListIcon from "../../icons/addListIcon/2x/baseline_add_circle_outline_black_18dp.png"

class SideNav extends Component {

    state = {
        toDoLists: []
    }

    // When a user clicks on the button to add a list, the user should be able to add a list
    handleAddNewList = (e) => {
        e.preventDefault();
        this.setState({
           toDoLists: [...this.state.toDoLists, 'New List'] 
        })
        console.log(this.state);  
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