import { Component, Input, OnInit} from '@angular/core';
import { WeatherData } from 'src/app/interfaces/weather-data';
import { WeatherServiceService } from 'src/app/service/weather-service.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
  
export class WeatherCardComponent {

  constructor(public weatherService: WeatherServiceService) { }

  @Input() weatherData: WeatherData = {}
  @Input() weatherLocation: string = ''

  weatherUnit!:string | null
  
  ngOnInit() {
    this.weatherUnit = this.weatherService.getLocalStorage['unit']
    // console.log(this.weatherData)
  }
}
