class App extends React.Component {
    constructor(props) {
        super(props);
        // this.text = "Something";
        this.state = {
            text: "Something",
            text1: "Something Else",
            text2: "Other thing",
        }
    }
    
    textChanged = (e) => {
        const newValue = e.target.value;
        // this.text = newValue;
        // this.forceUpdate();
        this.setState({
            text: newValue,
        });
    }

    
    alert1234 = () => {
        alert("1234");
    }

    render() {
        return (
            <div>
                <h2>Simple App with State</h2>
                {/* <input 
                  type="text" 
                  placeholder="Type Something" 
                  onChange={this.textChanged} /> */}
                <input 
                  type="text" 
                  placeholder="Type Something" 
                  onChange={(e) => this.setState({text: e.target.value})} />
                <h2>{this.state.text}</h2>
                <h1>{this.state.text1}</h1>
                <h1>{this.state.text2}</h1>
                <button onClick={_ => alert("ABCD")}>Click me to alert ABCD</button>
                <button onClick={this.alert1234}>Click me to alert 1234</button>
            </div>
        )
    }
}