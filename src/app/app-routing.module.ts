import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastWeatherComponent } from './components/forecast-weather/forecast-weather.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'current-weather', component: CurrentWeatherComponent },
  { path: 'weather-forecast', component: ForecastWeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
