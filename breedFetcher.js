// Cats as a Service Assignment

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else if (response.statusCode !== 200) {
      callback(null, `Response Error! Code: ${response.statusCode}`);
    } else if (body === '[]') {
      callback(null,`Requested breed ${breedName} is not found!`);
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };