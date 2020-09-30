function Greeting() {
    //* TO DO Write this function *//
    //* so time is being updated via JavaScript from the system clock *//
    //* and timeOfDay is using the logic to say Morning, Afternoon or Evening *//
    
    var time = "0:00:00";
    let timeOfDay = "Time";

    
    return (
        React.createElement("h3", {id: "Welcome"}, " Good ", timeOfDay, "! ", React.createElement("p", {id: "WelcomeTime"}), time));
}


//* Return sun or moon icon *//

function Icon() {
    //* TO DO Write this function *//

}
//* Display greeting, time, and icon. Update clock *//

function Tick() {
    ReactDOM.render(React.createElement("div", null, React.createElement(Greeting, null)), 
    document.getElementById("WelcomeBar"));
}
setInterval(Tick, 1000); 