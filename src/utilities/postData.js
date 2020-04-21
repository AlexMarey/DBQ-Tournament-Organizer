const fetch = require('isomorphic-fetch');

exports.postData = async (url = '', data = {}) => {
  console.log(`Post Data on ${url}`);

  return await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(checkStatus)
    .catch(err => {
      console.log(`Throwing error to caller of PostData`);
      throw err;
    });
};

function checkStatus(res) {
  console.log(`Checking response status...\nStatus Code: ${res.status}`);
  if (res.status >= 200 && res.status < 300) {
    console.log("Returning json data")
    return res.json();
  } else {
    console.log("Throwing Error to catch block of postData");
    let err = new Error(res.statusText);
    err.response = res;
    throw err;
  }
}