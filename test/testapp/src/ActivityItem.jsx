import React from "react"

function ActivityItem(props) {
    const selectedStyle = {
        fontStyle: "italic",
        color: "#fc8803",
        textDecoration: "underline"
    }
    
    return (
        <div className="activity-item">
            <input 
                type="checkbox" 
                selected={props.item.selected} 
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.selected ? selectedStyle: null}>{props.item.text}</p>
        </div>
    )
}

export default ActivityItem