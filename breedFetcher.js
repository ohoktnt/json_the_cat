// Cats as a Service Assignment

const request = require('request');
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.error('error: ', error);
  } else if (response.statusCode !== 200) {
    console.log(`Response Error! Code: ${response.statusCode}`);
  } else if (body === '[]') {
    console.log(`Requested breed ${breed} is not found!`);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});