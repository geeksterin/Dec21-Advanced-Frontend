class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
        this.textInputRef = React.createRef();
        this.buttonRef = React.createRef();
        // console.log(this.textInputRef);
    }
    updateText = (e) => {
        // const newVal = document.getElementById('text_field').value;
        const newVal = this.textInputRef.current.value;
        // console.log(this.buttonRef.current); ✔
        // console.log(document.getElementById('btn')); ❌

        this.setState({
            text: newVal
        });
    }
    render() {
        const names = [
            'Neelkanth',
            'Kushagra',
            'Simon',
            'Anurag',
            'Ashish',
            'Dev',
            'Vaishali',
            'Aayush'
        ];
        return(
            <div>
                <h2>This is React ref</h2>
                <input
                  type="text" 
                  ref={this.textInputRef} />
                <button id="btn" ref={this.buttonRef} onClick={this.updateText}>Update below 👇🏻</button>
                <h2>{this.state.text}</h2>
                <br />
                <br />
                {names.map((single_name, idx) =>
                    <GreetPerson name={single_name} key={idx} />
                )}
            </div>
        );
    }
}