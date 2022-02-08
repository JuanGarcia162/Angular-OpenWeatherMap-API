import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  API_Key = '';
  URI: string = '';

  constructor(private httpClient: HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.API_Key}&units=metric&q=`
  }

  getWeather(cityName: string, countryCode: string){
    return this.httpClient.get(`${this.URI}${cityName},${countryCode}`)
  }
}
