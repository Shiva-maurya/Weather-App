async function getWeather() {
  const location = document.getElementById('locationInput').value;
  const apiKey = '7308c3e5ab5756a15f18424b0ffe1bb4'; // Replace with your actual API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Location not found');
    }

    const data = await response.json();
    const weatherInfo = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon"/>
    `;
    document.getElementById('weatherResult').innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
  }
}