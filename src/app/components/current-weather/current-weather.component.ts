import { Component , OnInit} from '@angular/core';
import { WeatherServiceService } from 'src/app/service/weather-service.service';
import { WeatherData } from 'src/app/interfaces/weather-data';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

  constructor(public weatherService: WeatherServiceService){}

  // currentWeatherData: WeatherData = {
  //   'humidity': 0,
  //   'precipitationProbability': 0,
  //   'temperature': 0,
  //   'temperatureApparent': 0,
  //   'windGust': 0,
  //   'cloudCover': 0
  // }
  currentWeatherData: WeatherData = {}


  // weatherArray =  []

  currentWeatherLocation: string = 'Richmond County, New York, United States'

  // ngOnInit() {
  //     this.currentWeatherData['humidity'] = 63,
  //     this.currentWeatherData['precipitationProbability'] = 0
  //     this.currentWeatherData['temperature'] = 42.24,
  //     this.currentWeatherData['temperatureApparent'] = 42.24,
  //     this.currentWeatherData['windGust'] = 2.24,
  //     this.currentWeatherData['cloudCover'] = 0
  // }

  // ngOnInit() {
  //   this.weatherService.getCurrentWeather().subscribe(data => {
  //     console.log(data.data.values)
  //     this.currentWeatherData['humidity'] = data.data.values.humidity,
  //     this.currentWeatherData['precipitationProbability'] = data.data.values.precipitationProbability,
  //     this.currentWeatherData['temperature'] = data.data.values.temperature,
  //     this.currentWeatherData['temperatureApparent'] = data.data.values.temperatureApparent,
  //     this.currentWeatherData['windGust'] = data.data.values.windGust,
  //     this.currentWeatherData['cloudCover'] = data.data.values.cloudCover
  //   })

    ngOnInit() {
    this.weatherService.getCurrentWeather().subscribe(data => {
      console.log(data.data.values)
      this.currentWeatherData = data.data.values
    })
      
  }
}
