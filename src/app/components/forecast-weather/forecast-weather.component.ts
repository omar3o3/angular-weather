import { Component, OnInit } from '@angular/core';
import { mockForecast } from '../../mock-forecast'
import { WeatherData } from 'src/app/interfaces/weather-data';
import { WeatherServiceService } from 'src/app/service/weather-service.service';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css']
})
export class ForecastWeatherComponent {

  // constructor(public mockForecastdata: mockForecast){}
  constructor(public weatherService: WeatherServiceService){}

  // mockForecastdata = mockForecast
  mockForecastdata = mockForecast.data.timelines[0].intervals
  parent2 = 'parent2'

  // forecastData = mockForecast.data.timelines.intervals
  // currentWeatherData: WeatherData = {}

  ngOnInit() {
    // console.log(this.mockForecastdata)
    // this.currentWeatherData = mockForecast.data.timelines.intervals
    // this.weatherService.getLongLatFromZip().subscribe(data => console.log(data))
    // this.weatherService.getForecastData().subscribe(data => console.log(data))
    this.weatherService.getForecastData().subscribe(data => {
      console.log(data);
      this.weatherService = data.timelines[0].intervals
    });
  }
}
