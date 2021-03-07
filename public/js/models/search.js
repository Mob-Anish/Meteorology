import axios from 'axios';
import {key} from '../config';

export default class Weather {
  constructor(query) {
    this.query = query;
  }

  // API DATA
  async getWeather() {
    try {
      const results = await axios(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.query},${this.query},${this.query}&units=metric&appid=${key}`
      );
      this.data = results.data;
      this.city = results.data.name;
      this.temp = results.data.main.temp;
      this.temp_maxi = results.data.main.temp_min;
      this.temp_mini = results.data.main.temp_max;
      this.country = results.data.sys.country;
      this.icon = results.data.weather[0].icon;
      this.description = results.data.weather[0].description;
      this.humidity = results.data.main.humidity;
    } catch (error) {
     alert(`Sorry this address is not in my book!!`);
    }
  }
}
