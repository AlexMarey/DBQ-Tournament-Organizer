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
    return await {
      status: response.status,
      body: response.json()
    }
    } catch (error) {
      console.log(error);
    }
  };