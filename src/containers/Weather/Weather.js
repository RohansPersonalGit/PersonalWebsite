import React, { Component } from 'react';
import './Weather.css'; 
class Weather extends Component {
    state = {
        weatherIn: [
          {
            city: "", temp: "", description:""
          }
        ]
      }
    //   shouldComponentUpdate(nextProps, nextState) {
    //     console.log('scu');
    //     return this.state.config[0].update
        
        
    //  }
    componentDidMount() {
      var weatherInfo = {    
      }; 
      fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=5eb4439195011dfce08d1e7adaa3a135'
      ).then(function(response){
        return response.json(); 
      }).then(function(myJson){
        weatherInfo.name = myJson.name; 
        weatherInfo.temp = myJson.main.temp;
        weatherInfo.description = myJson.weather[0].description;
        this.setState({
          weatherIn: 
            [{
              city: weatherInfo.name, 
              temp: weatherInfo.temp,
              description: weatherInfo.description
            }]})   
      }.bind(this)).catch(function(){
        console.log("fetch failed"); 
        this.setState({
          weatherIn: 
            [{
              city: "error",
              temp: "error",
              description: "error"
            }]}) 
      })
    }
    render(){  
      console.log(this.state.weatherIn[0].city)             
        return (
        <div className="Weather" >
            <p className="WeatherContent">City: {this.state.weatherIn[0].city}</p>
            <p className="WeatherContent">Temperature: {this.state.weatherIn[0].temp}</p>
            <p className="WeatherContent">Description: {this.state.weatherIn[0].description}</p>        
        </div>
    )}
}; 
export default Weather; 
//login
//init//deploy