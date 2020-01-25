import React from 'react';
import ForecastRow from './ForecastRow';
import axios from 'axios';
import { format } from 'date-fns';

class WeatherFore extends React.Component{
    constructor(props){
        super(props);
    }

    state = {
        addClass:true,
        currentAct:"5",

    }

    toggle = (event) =>{
        if(event.target.value !== this.state.currentAct){
            this.setState({addClass:!this.state.addClass,currentAct:event.target.value}); 
        }
    }

    renderForecastRow(key,day,time,high,low,unit){
        return (<ForecastRow key = {key} day={day} time={time} high={high} low={low} unit = {unit}/>)

    }

    // onClick(event) {
    //     this.props.handleChangeLimit;
    //     this.toggle;
    //  }

    // componentDidMount() {
    //     // axios.get('https://jr-weather-api.herokuapp.com/api/weather?city=adelaide&cc=au')
    //     // .then(response => {
    //     //    const rawforecasts = response.data.data.forecast.slice(0,10);
    //     console.log(this.props.forecasts)
    //        this.setState(this.props.forecasts);
    //        const forecasts = this.state.forecasts.map(rawforecast => {
    //             const date = new Date(rawforecast.time *1000);
    //             const day = format(date,'EEE');
    //             const time = format(date,'HH:mm');


    //             return {
    //                 ...rawforecast,
    //                 day,
    //                 time
    //             };
    //        })
    //        this.setState({forecasts});
    //     // })
    // }

    callTwo(event) {
        this.toggle(event);
        this.props.handleChangeLimit(event);
    }

    render(){
        // const {limit} = this.props;
        const rawforecasts = this.props.forecasts.slice(0,this.props.limit);
        const forecasts = rawforecasts.map(rawforecast => {
                        const date = new Date(rawforecast.time *1000);
                        const day = format(date,'EEE');
                        const time = format(date,'HH:mm');
                        const unit = this.props.unit;
                        const high = unit === 'c' ? rawforecast.maxCelsius: rawforecast.maxFahrenheit; 
                        const low = unit === 'c' ? rawforecast.minCelsius: rawforecast.minFahrenheit;  
        
        
                        return {
                            ...rawforecast,
                            day,
                            time,
                            high,
                            low,
                            unit
                        };
                   });
        return (
            <section className="weather-forecast">
                <div className="forecast__switch">
                    <button className={`forecast__switch_0 ${this.state.addClass === true?"switch-active": ""}`} onClick={(e)=>this.callTwo(e)}  value={5}> 5 items</button>
                    <button className={`forecast__switch_1 ${this.state.addClass === false?"switch-active": ""}`} onClick={(e)=>this.callTwo(e)} value={10}>10 items</button>
                </div>
                {
                    forecasts.map(forecast => {
                        return this.renderForecastRow(forecast.day+forecast.time, forecast.day,forecast.time,forecast.high,forecast.low,forecast.unit)
                    })
                }
            </section>
        )
    }
}

export default WeatherFore;