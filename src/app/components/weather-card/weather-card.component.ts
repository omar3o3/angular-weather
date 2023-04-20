import { Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { WeatherData } from 'src/app/interfaces/weather-data';
import { WeatherServiceService } from 'src/app/service/weather-service.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
  
export class WeatherCardComponent {

  constructor(public weatherService: WeatherServiceService) { }

  // @Input() weatherData: WeatherData = {}
  @Input() weatherData: any
  @Input() weatherLocation: string = ''
  @Input() parent: string = ''

  weatherUnit!:string | null
  
  ngOnInit() {
    this.weatherUnit = this.weatherService.getLocalStorage['unit']
    // console.log(this.weatherData)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Input property "parentData" changed:', changes['weatherData']);
  }
}
