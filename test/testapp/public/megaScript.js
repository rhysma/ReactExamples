function setMessage() {
    let currentDay = new Date();
    let currentHour = new Date().getHours();
    let timeString = currentDay.toLocaleTimeString([], { timeStyle: 'short' });
    let message;

    if (currentHour >= 0 && currentHour < 12) {
        message = 'Good Morning!';
    } else if (currentHour > 12 && currentHour <= 17) {
        message = 'Good Afternoon!';
    } else if (currentHour > 17 && currentHour < 24) {
        message = 'Good Evening!';
    }

    return (React.createElement("p", {}, message + ' ' + timeString));
}

function setIcon() {
    let currentHour = new Date().getHours();


    if (currentHour >= 6 && currentHour < 18) {
        return (ReactDOM.render(React.createElement("img", {
            src: "sun.png"
        }, null), document.getElementById("icon")));
    } else {
        return (ReactDOM.render(React.createElement("img", {
            src: "moon.png"
        }, null), document.getElementById("icon")));
    }

}

function setTimeContainer() {
    setIcon();
    ReactDOM.render(React.createElement("div", null, React.createElement(setMessage, null)),
        document.getElementById("welcome_message"));
}

setInterval(setTimeContainer, 100);