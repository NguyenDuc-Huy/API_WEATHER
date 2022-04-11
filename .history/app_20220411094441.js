const search_box = document.querySelector(".search");

function changeWeather(data) {
  const city = document.querySelector(".city");
  const country = document.querySelector(".country");
  const datetime = document.querySelector(".datetime");
  const cdegree = document.querySelector(".temperature .temper-no");
  const visibility = document.querySelector(".visibility");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");
  const desc = document.querySelector(".desc");
  const content = document.querySelector(".content");

  city.innerHTML = data.name;
  country.innerHTML = data.sys.country;
  cdegree.innerHTML = data.main.temp;
  visibility.innerHTML = data.visibility + "(m)";
  datetime.innerHTML = new Date().toLocaleString("vi");
  wind.innerHTML = data.wind.speed + "(m/s)";
  humidity.innerHTML = data.main.humidity + "(%)";
  desc.innerHTML = data.weather[0].description;
}
async function getWeather(input) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
  let data = await fetch(url).then((res) => res.json());
  if (data.cod == 200) changeWeather(data);
  else {
    content.classList.add(".hide");
  }
}
search_box.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    getWeather(e.target.value.trim());
  }
});

// getWeather("nha trang");
