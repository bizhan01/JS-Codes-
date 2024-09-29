const apiKey = 'YOUR_API_KEY';
const city = 'New York';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(`Weather in ${city}: ${data.weather[0].description}`);
    })
    .catch(error => console.log('Error fetching data:', error));
