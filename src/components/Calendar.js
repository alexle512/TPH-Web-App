import React from 'react'

var styles = {
    border: 0,
    width: 800,
    height: 600,
    frameborder: 0,
    scrolling: "no"

}

// "border: 0" width="800" height="600" frameborder="0" scrolling="no"

const Calendar = (props) => {
    return (
        <div>
        <iframe title= "calendar" src="https://calendar.google.com/calendar/embed?src=alexle512%40gmail.com&ctz=America%2FChicago" style={styles}></iframe>
        </div>
    )
}

export default Calendar 