import { Component } from "react";
class Input extends Component {
    onInputChange = (e) => {
        const new_value = e.target.value;
        this.props.onValueChange(new_value);
    }
    render() {
        return (
            <input type="color" onChange={this.onInputChange} />        
        );
    }
}

export default Input;