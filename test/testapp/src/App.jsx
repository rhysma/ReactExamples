import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            activity1: false,
            activity2: false,
            activity3: false,
            activity4: false,
            activity5: false,
            activity1Text: "City Tours",
            activity2Text: "Sports",
            activity3Text: "Cycling",
            activity4Text: "Museums",
            activity5Text: "Boating",
            destination: "New Zealand"
        }
    
        this.handleChange = this.handleChange.bind(this)
        
    }
    
    
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
        this.setActivities()
    }
    
    setActivities(){
        let dest = this.state.destination
        
    if (dest = "New Zealand") {
        this.setState({ activity1Text: "City Tours" });
        this.setState({ activity2Text: "Sports" });
        this.setState({ activity3Text: "Cycling" });
        this.setState({ activity4Text: "Museums" });
        this.setState({ activity5Text: "Boating" });
        }else if (dest = "Maldives") {
        this.setState({ activity1Text: "Museums" });
        this.setState({ activity2Text: "Sailing" });
        this.setState({ activity3Text: "Beach" });
        this.setState({ activity4Text: "Hiking" });
        this.setState({ activity5Text: "Boating" });
        }else if (dest = "Venice") {
        this.setState({ activity1Text: "Museums" });
        this.setState({ activity2Text: "Theatre" });
        this.setState({ activity3Text: "Parks and Recreation" });
        this.setState({ activity4Text: "City Tours" });
        this.setState({ activity5Text: "More coming soon" });
        }else if (dest = "Cancun") {
        this.setState({ activity1Text: "Parks and Recreation" });
        this.setState({ activity2Text: "Beaches" });
        this.setState({ activity3Text: "Boating" });
        this.setState({ activity4Text: "Snorkeling" });
        this.setState({ activity5Text: "More coming soon" });
        }
    }
    

    render() {
        return (
                        
            <form>
            
            <label>Please Choose a Destination:</label>
            <br />
            <select 
                value={this.state.destination}
                onChange={this.handleChange}
                name="destination"
                >
                    <option value="New Zealand">New Zealand</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Venice">Venice</option>
                    <option value="Cancun">Cancun</option>
                    
            </select>
            <br />
            <br />
            <h3>The activities offered in {this.state.destination} are listed below. Please make your selections</h3>
            <br />
                <label>
                    <input 
                        type="checkbox" 
                        name="activity1"
                        checked={this.state.activity1}
                        onChange={this.handleChange}
                    /> {this.state.activity1Text}
                </label>
                <br />
                <label>
                    <input 
                        type="checkbox" 
                        name="activity2"
                        checked={this.state.activity2}
                        onChange={this.handleChange}
                    /> {this.state.activity2Text}
                </label>
                <br />
                <label>
                    <input 
                        type="checkbox" 
                        name="activity3"
                        checked={this.state.activity3}
                        onChange={this.handleChange}
                    /> {this.state.activity3Text}
                </label>
                <br />
                <label>
                    <input 
                        type="checkbox" 
                        name="activity4"
                        checked={this.state.activity4}
                        onChange={this.handleChange}
                    /> {this.state.activity4Text}
                </label>
                <br />
                <label>
                    <input 
                        type="checkbox" 
                        name="activity5"
                        checked={this.state.activity5}
                        onChange={this.handleChange}
                    /> {this.state.activity5Text}
                </label>
            </form>
        )
    }
}

export default App