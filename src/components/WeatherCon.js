import React from 'react';
import iconumber from '../icon/icon-umberella.png';
import iconwind from '../icon/icon-wind.png';
import iconcompass from '../icon/icon-compass.png';

const titleStyle ={
    textAlign: "center",
    fontSize: "14px"
    }

class WeatherCon extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {cityName, unit,current} =this.props;
        const tempHigh = unit === 'c' ? current.maxCelsius : current.maxFahrenheit;
        return (
            <section className="weather-condition">
                <div className="weather-condition__location">{cityName}</div>
                <div style={titleStyle}>Clear</div>
                <div className="weather-condition__temp">{tempHigh} {unit}</div>
                <div className="weather-condition__desc">
                    <div>
                        <img src={iconumber}/>
                        <span className="citem">{current.humidity}%</span>
                    </div>
                    <div>
                        <img src={iconwind}/>
                        <span className="citem">{current.windSpeed}km/h</span>
                    </div>
                    <div>
                        <img src={iconcompass}/>
                        <span className="citem">{current.windDirection}</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default WeatherCon;