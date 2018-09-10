import React, {Component} from 'react';
import "./SideNav.css";
import ListItem from "../ListItem"
import Avatar from "../Avatar"
import calendarIcon from "../../icons/baseline-calendar_today-black-18/2x/baseline_calendar_today_black_18dp.png"
import listIcon from "../../icons/listItem/2x/baseline_list_black_18dp.png"

class SideNav extends Component {

    // state = {
    //     toDoLists=[]
    // }

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
            </div>
        )
    }
}

export default SideNav