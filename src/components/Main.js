import React from 'react';
import WeatherCon from './WeatherCon';
import WeatherFore from './WeatherFore';

class Main extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <main>
                <WeatherCon cityName={this.props.cityName} current={this.props.current} unit = {this.props.unit}/>
                <WeatherFore 
                limit = {this.props.limit}
                forecasts={this.props.forecasts} 
                unit = {this.props.unit} 
                handleChangeLimit={this.props.handleChangeLimit}/>
            </main>
        )
    }
}

export default Main;