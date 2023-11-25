import axios from "axios";

export const BASE_URl = "https://bannerbuzz.onrender.com/api/v1";

export const API = (url, method, data, token) =>
  new Promise((resolve, reject) => {
    // console.debug(
    //   "----------------APICAll(fetchDataFromAPI)------------------------"
    // );
    // console.log("Url", Base_URL + url);
    // console.log("method", method);
    // console.log("Body", body);
    // console.log("Token", token);

    var headers;

    if (token != null) {
      headers = {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      };
    } else {
      headers = {
        Accept: "application/json",
      };
    }
    if (data) {
      axios({
        method: method,
        baseURL: BASE_URl + url,
        headers: headers,
        data: data,
      })
        .then((response) => {
          // When api send success response set in resolve method
          //   console.log("check main response",response)
          return resolve(response.data);
        })
        .catch((error) => {
          // When api send success response set in resolve method
          return reject(error);
        });
    } else {
      axios({
        method: method,
        baseURL: BASE_URl + url,
        headers: headers,
      })
        .then((response) => {
          // When api send success response set in resolve method
          //   console.log("check main response",response)
          return resolve(response.data);
        })
        .catch((error) => {
          // When api send success response set in resolve method
          return reject(error);
        });
    }
  });