import React, { Component } from 'react';
import './Weather.css'; 
class Weather extends Component {
    state = {
        config: [{
            update: true
        }],
        weatherIn: [
          {
            city: "", temp: "", description:""
          }
        ]
      }
      shouldComponentUpdate(nextProps, nextState) {
        console.log('scu');
        return this.state.config[0].update
        
        
     }
    render(){
        var weatherInfo = {    
        }; 
        fetch(
          'http://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=5eb4439195011dfce08d1e7adaa3a135'
        ).then(function(response){
          return response.json(); 
        }).then(function(myJson){
          weatherInfo.name = myJson.name; 
          weatherInfo.temp = myJson.main.temp;
          weatherInfo.description = myJson.weather[0].description;
          this.setState({config: [{update: false}],
            weatherIn: 
              [{
                city: weatherInfo.name, 
                temp: weatherInfo.temp,
                description: weatherInfo.description
              }]}) 
        }.bind(this))
        return (
        <div className="Weather" >
            <p>City: {this.state.weatherIn[0].city}</p>
            <p>Temperature: {this.state.weatherIn[0].temp}</p>
            <p>Description: {this.state.weatherIn[0].description}</p>        
        </div>
    )}
}; 
export default Weather; 