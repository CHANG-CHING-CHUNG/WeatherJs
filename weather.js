class Weather {
  constructor(city, country) {
    this.apikey ='1cc0743cdad692b45d5adb6e723855eb';
    this.city = city;
    this.country = country;
  }

  // Fetach weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apikey}`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
