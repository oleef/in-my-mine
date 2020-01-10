import { configAPI } from "../configs/api.config";

import axios from "axios";
const queryString = require("query-string");

const Api = async (group, path, params, data) => {
  const endpoint = process.env.API_DOMAIN;
  let url = "";
  let method = "";
  let obj = {};
  console.log(configAPI);
  url = `${endpoint}${configAPI[group][path]["url"]}`;
  method = `${configAPI[group][path]["method"]}`;
  if (method === "GET") {
    obj = {
      url,
      method,
      params
    };
    // params = queryString.stringify(params);
    // params = params.replace(/\[\]/g, "");
    // url = `${url}?${params}`;
  } else if (method === "POST" && typeof params !== "object") {
    obj = {
      url: `${url}/${params}`,
      method,
      data
    };
  }
  console.log("obj", obj);
  console.log("url", url);
  console.log("method", method);
  return axios(obj).then(res => {
    return res.data;
  });
};

export default Api;
