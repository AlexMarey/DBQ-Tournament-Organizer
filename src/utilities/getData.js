const fetch = require('node-fetch');

const getData = async (url='', data={}) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

exports.getData = getData;