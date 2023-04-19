import { Component } from '@angular/core';
import { WeatherServiceService } from 'src/app/service/weather-service.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

  constructor(public weatherService: WeatherServiceService){}

  // this.getLocalStorage

}
