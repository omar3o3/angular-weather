import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { WeatherServiceService } from 'src/app/service/weather-service.service';
import { WeatherInput } from "../../interfaces/weather-input"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private weatherService: WeatherServiceService){}

  zipCode!: number
  unit!: "metric" | "imperial"

  onSubmit() {
    const formData: WeatherInput = { zipCode: this.zipCode, unit: this.unit }
    this.weatherService.setLocalStorage(formData)
  }


}
