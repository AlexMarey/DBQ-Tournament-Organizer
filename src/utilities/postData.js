const fetch = require('node-fetch');

exports.postData = async (url = '', data = {}) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (response.status!=200) {
      throw `Received status code ${response.status}. Please consult with Crash or Hondo.`;
    }
    return await response.json()
    } catch (error) {
      console.log(error);
    }
  };