function buscarClima() {
  const city = document.getElementById('city').value;
  const apiKey = '582e46a29ce865203afe37be0936a3c0';

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},BR&appid=${apiKey}&lang=pt_br&units=metric`)
    .then(response => response.json())
    .then(data => {
      const clima = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperatura: ${data.main.temp}°C</p>
        <p>Clima: ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      `;
      document.getElementById('weather-result').innerHTML = clima;
    })
    .catch(error => {
      document.getElementById('weather-result').innerHTML = "<p>Cidade não encontrada.</p>";
    });
}
