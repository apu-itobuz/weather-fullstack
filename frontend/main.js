const apikey = "0c80b2b56f1943ada19100744230103";
const title = document.querySelector(".title");
const temp = document.querySelector(".temp");
const date = document.querySelector(".date");
const sectionMain = document.querySelector(".sectionMain");

async function getWeatherData(search, apiKey) {
  const apiurl = `http://localhost:7001/weather/${search}`;
  const response = await fetch(apiurl);
  const data =  await response.json();
  return data;
}

async function searchInput(apikey) {
  const location = document.querySelector(".location");
  const inputPlace = document.getElementById("text");

  const data = await getWeatherData(inputPlace.value, apikey); //data = {};
  //------------------------------------
  const placeName = data.name ? data.name : "----";
  const temperature = data.temp_c ? data.temp_c : "----";
  const condition = "Sunny";
  const fetchDate = new Date();
  //----------------------------------------------
  location.innerHTML = placeName;
  title.innerHTML = condition;
  temp.innerHTML = temperature;
  date.innerHTML = fetchDate;
  //---------------------------------
  sectionMain.classList.remove("day", "night", "rainy");
  // sectionMain.classList.remove(sectionMain.classList[1]);
  if (condition.toLowerCase().includes("sunny")) {
    sectionMain.classList.add("day");
  } else if (condition.toLowerCase().includes(["cloud", "Partly cloudy"])) {
    sectionMain.classList.add("night");
  } else sectionMain.classList.add("rainy");
}

document.getElementById("search").addEventListener("click", () => {
  searchInput(apikey);
});
