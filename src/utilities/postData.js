const fetch = require('isomorphic-fetch');

exports.postData = async (url = '', data = {}) => {
  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(checkStatus)
    .catch(err => console.log(err)); // Need to handle this error better than catching it. Currently it can only be network related errors.
};

function checkStatus(res) {
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    console.log("--------- NON 200 STATUS CODE -----------")
    let err = new Error(res.statusText);
    err.response = res;
    throw (err);
  }
}