import { Component , OnInit} from '@angular/core';
import { WeatherServiceService } from 'src/app/service/weather-service.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent {

  constructor(public weatherService: WeatherServiceService){}

  // this.weatherService.getCurrentWeather().subscribe(data => console.log(data))
  // recieveCurrentWeather() {
  //   this.weatherService.getCurrentWeather().subscribe(data => console.log(data))
  // }

  ngOnInit() {
    this.weatherService.getCurrentWeather().subscribe(data => console.log(data))
  }
}
