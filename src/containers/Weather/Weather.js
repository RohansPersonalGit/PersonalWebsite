import React, { Component } from 'react';
import './Weather.css'; 
class Weather extends Component {
    state = {
        weatherIn: [
          {
            city: "", temp: "", description:"", iconUrl:"", loaded: false
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
        let urlIcon = "http://openweathermap.org/img/w/"
        weatherInfo.name = myJson.name;
        weatherInfo.icon = myJson.weather[0].icon; 
        console.log(weatherInfo.icon); 
        weatherInfo.temp = myJson.main.temp;
        weatherInfo.description = myJson.weather[0].description;
        let png = ".png"; 
        let fullurl = urlIcon + weatherInfo.icon + png; 
        this.setState({
          weatherIn: 
            [{
              city: weatherInfo.name, 
              temp: weatherInfo.temp,
              description: weatherInfo.description,
              iconUrl: fullurl,
              loaded: true
            }]})
            console.log(this.state.weatherIn[0].iconUrl);    
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
      let imgs = (this.state.weatherIn[0].iconUrl);  
      if (this.state.weatherIn[0].loaded){
        console.log(imgs); 
        var imgtag = (<img src={imgs} height= {100} width={100} />)
      }
      else{
        var imgtag = (<img className="WeatherPhoto"src={imgs} height= {0} />)

      }            
        return (
        <div className="Weather" >
        {imgtag}
            <p className="WeatherContent">City: {this.state.weatherIn[0].city}</p>
            <p className="WeatherContent">Temperature: {this.state.weatherIn[0].temp}</p>
            <p className="WeatherContent">Description: {this.state.weatherIn[0].description}</p>        
        </div>
    )}
}; 
export default Weather; 
//login
//init//deploy