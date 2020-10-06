const c = React.createElement;

class MessageClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            am: false,
            message: 'Morning',
            time: '',
            imageURL: 'sun.png'
        };
    }

    setMessage() {
        var currentDay = new Date();
        var currentHour = new Date().getHours();
        var timeString = currentDay.toLocaleTimeString([], { timeStyle: 'short' });

        this.setState({ time: timeString });

        if (currentHour >= 0 && currentHour < 12) {
            this.setState({ message: 'Morning' });
        }
        if (currentHour > 12 && currentHour <= 17) {
            this.setState({ message: 'Afternoon' });
        }
        if (currentHour > 17 && currentHour < 24) {
            this.setState({ message: 'Evening' });
        }

        //set am pm for image change
        if (currentHour >= 6 && currentHour < 18) {
            this.setState({ am: true });

        } else {
            this.setState({ am: false });
        }
    }

    setImage() {

        if (this.state.am) {
            //this.setState({ imageURL: "sun.png" });
            document.getElementById("icon").src = "sun.png";
        } else {
            //this.setState({ imageURL: "moon.png" });
            //document.getElementById("icon").src = this.state.imageURL;
            document.getElementById("icon").src = "moon.png";
        }
    }

    componentDidMount() {
        this.setMessage();
        this.setImage();
    }

    render() {

        return 'Good ' + this.state.message + ' ' + this.state.time

    }
}

const domContainer = document.querySelector('#welcome_message');
ReactDOM.render(c(MessageClock), domContainer);