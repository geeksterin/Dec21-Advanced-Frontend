class CityInfo extends React.Component {
    render() {
        const info = this.props.info;
        let weather_description = "";
        if(info?.weather?.length > 0) {
            weather_description = info.weather[0].description;
        }
        let rain_state = "";
        if(info.rain != undefined) {
            rain_state = info.rain['1h'];
        }
        
        return (
            <div>
                <h3>{info.name}</h3>
                <h4>{info?.main?.temp}</h4>
                <h4>{weather_description}</h4>
                <h5>{rain_state}</h5>
                <h5>{info?.wind?.speed}</h5>
            </div>
        )
    }
}