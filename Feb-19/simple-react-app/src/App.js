class App extends React.Component {
    #API_KEY = "d96856b0f78704a9bec86e374c52b530";
    #API_URL = "https://api.openweathermap.org/data/2.5/weather";
    constructor(props) {
        super(props);
        this.state = {
            cityName: "Bengaluru",
            cityInfo: {},
        };
        navigator.geolocation.getCurrentPosition((position) => {
            const coords = position.coords;
            const lat = coords.latitude;
            const long = coords.longitude;
            // console.log(lat, long);
            this.fetchWeatherByLatLong(lat, long);
        });
    }

    cityNameChanged = (newCityName) => {
        this.setState({
            cityName: newCityName,
            cityInfo: this.state.cityInfo,
        });
        this.fetchWeather(newCityName);
    }

    fetchWeatherByLatLong = async(lat, long) => {
        const res  = await fetch(`${this.#API_URL}?lat=${lat}&lon=${long}&appid=${this.#API_KEY}&units=metric`);
        const data = await res.json();
        this.setState({
            cityName: this.state.cityName,
            cityInfo: data,
        });
    }

    fetchWeather = async (searchCityName) => {
        const res  = await fetch(`${this.#API_URL}?q=${searchCityName}&appid=${this.#API_KEY}&units=metric`);
        const data = await res.json();
        this.setState({
            cityName: this.state.cityName,
            cityInfo: data,
        })
    }

    render() {
        return (
            <div>
                <Heading />
                <Search onCityNameChanged={this.cityNameChanged} />
                <CityInfo info={this.state.cityInfo} />
            </div>
        )
    }
}