import React from 'react';
import './main.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { getWeather } from './utlis/axios';

class App extends React.Component {
  state = {
    forecasts: [],
    cityName:'',
    current:{},
    limit:5,
    searchValue: '',
    unit: 'c',

  }

  async componentDidMount(){
    try{
      const response = await getWeather('adelaide')
      this.updateWeather(response);
    } catch (err){
      console.log(err);
    }
  }

  updateWeather = (response) => {
      const data = response.data.data;
      const cityName = data.city.name;
      const current = data.current;
      const forecasts = data.forecast;
      this.setState({cityName,current,forecasts}); 
  }

  handleChangeLimit = event => {
    const value = event.target.value;
    this.setState({limit:value})
  }

  handleSearchValueChange = event => {
    const value = event.target.value;
    this.setState({searchValue:value});
  }

  search = async () => {
    const response = await getWeather(this.state.searchValue)
    this.updateWeather(response); 
  }

  toggleUnit = () => {
    this.setState(state => ({
      unit: this.state.unit === 'c' ? 'F' : 'c'
    }))
  }

  render() {
    // console.log(this.state.forecasts)
      return (
      <div className="weather-channel__container">
        <Header />
        <Nav 
          toggleUnit = {this.toggleUnit}
          unit = {this.state.unit}
          search = {this.search}
          searchValue={this.state.searchValue}
          handleSearchValueChange = {this.handleSearchValueChange} 
        />
        <Main
          limit = {this.state.limit}
          handleChangeLimit={this.handleChangeLimit}
          unit = {this.state.unit}
          cityName={this.state.cityName} 
          current={this.state.current} 
          forecasts={this.state.forecasts} />
        <Footer />
      </div>
    )
  }
}

export default App;
