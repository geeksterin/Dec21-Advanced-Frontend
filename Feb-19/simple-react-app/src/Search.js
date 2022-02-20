class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "Bengaluru",
        };
    }

    cityNamechanged = (e) => {
        const newCityName = e.target.value;
        this.setState({
            cityName: newCityName
        });
    }

    searchCity = (e) => {
        e.preventDefault();
        this.props.onCityNameChanged(this.state.cityName);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.searchCity}>
                    <input 
                      type="text" 
                      placeholder="Enter City Name" 
                      value={this.state.cityName} 
                      onChange={this.cityNamechanged} 
                    />

                    <button>Search</button>
                </form>
            </div>
        )
    }
}