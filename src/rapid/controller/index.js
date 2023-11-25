const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const config = require('../../../config');
const axios = require('axios');

module.exports.find = async (res, parameters) => {


  const IMDB_API_URL = 'https://imdb8.p.rapidapi.com/title/find';
  
  const headers = {
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    'X-RapidAPI-Key': "834ec2e3femshbaec3de548aa72fp185280jsn27d5b845c38d",
  };
  
  const params = {
    q: 'game of thrones',
  };
  
  axios.get(IMDB_API_URL, { headers, params })
    .then(response => {
      if (response.status === 200) {
        const data = response.data;
        // console.log(data);
        return res.status(200).json({
          status: 200,
          data:data
        });
      } else {
        return res.status(400).json({
          status: 400,
          message:`Error: ${response.status}, ${response.data}`,
        });
      }
    })
    .catch(error => {
      console.error(`Error: ${error.message}`);
    });
  

};
