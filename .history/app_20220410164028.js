const search_value = document.querySelector(".search");
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
  let data = await fetch(url).then((res) => res.json());
  changeWeather(data);
}
function changeWeather(data) {
  const city = document.querySelector(".city");
  const country = document.querySelector(".country");
  const datetime = new Date().toLocaleString();
  const cdegree = document.querySelector(".temperature .temp-no");
  const visibility = document.querySelector(".visibility");
}
