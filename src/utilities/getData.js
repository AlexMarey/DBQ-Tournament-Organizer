const fetch = require("node-fetch");

exports.getData = async (url = "") => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status!=200) {
      throw `Received status code ${response.status}. Please consult with Crash or Hondo.`;
    }
    return await response.json(); 
  } catch (error) {
    console.log(error);
  }
};
