const fetch = require('isomorphic-fetch');

exports.postData = async (url = '', data = {}) => {
  try {
    return await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(checkStatus);
  } catch (error) {
    console.log('Error in POSTDATA');
    // console.log(error);
    throw error;
  }
};

function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res;
  } else {
    let err = new Error(res.statusText);
    err.response = res;
    throw err;
  }
}