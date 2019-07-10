//const axios = require('axios');
const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.direccion)
    .then(console.log);

//argv.direccion

// console.log(argv.direccion);
// const encodeUlr = encodeURI(argv.direccion);
// console.log(encodeUlr);

// const instance = axios.create({
//     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUlr }`,
//     //timeout: 1000,
//     headers: { 'X-RapidAPI-Key': '7b4b343dadmshdb19b66dce59f11p1a42b8jsn3605dd9cfa35' }
// });
// instance.get()
//     .then((resp) => {
//         console.log(resp.data.Results[0]);
//     }).catch((err) => {
//         console.log('ERROR !!!!', err);
//     });