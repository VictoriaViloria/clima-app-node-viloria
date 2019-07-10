const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=6e97b9fb27bc58c542bab28134b35fe5&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}