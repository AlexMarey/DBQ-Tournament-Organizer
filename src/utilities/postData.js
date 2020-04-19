const fetch = require('node-fetch');

exports.postData = async (url = '', data = {}) => {
  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(checkStatus)
    .then(res=>{
      return res
    })
    
    // .then((res) => {
    //   res.json()
    //   res.status
    // })
    // .then((data) => {
    //   console.log(data);
    // });
    //   var status = response.status;

    //   const challongeData = {
    //     status,
    //     data,
    //   }

    //   return challongeData;
    // });

    // if (response.status!=200) {
    //   throw `Received status code ${response.status}. Please consult with Crash or Hondo.`;
    // }
    // return await response.json()
    } catch (error) {
      console.log(error);
    }
  };

function checkStatus (res) {
  if (res.status >= 200 && res.status < 300) {
    return res.json()
  } else {
    let err = new Error(res.statusText)
    err.response = res
    throw err
  }
}
