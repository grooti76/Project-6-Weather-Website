const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "31299b3a25msh1cb1b86690fe182p14b58djsne669e90a998f",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", () => {
  getWeather(input.value);
  city_name.innerHTML = "Weather of " + input.value;
  city_name1.innerHTML = input.value;
  city_name2.innerHTML = input.value;
  info.style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("card-feel").style.display = "block";
});
