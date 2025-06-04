// test-proxy.js
const https = require("https");
const { HttpsProxyAgent } = require("https-proxy-agent");

const proxyAgent = new HttpsProxyAgent("http://127.0.0.1:10808");
https
  .get(
    "https://accounts.google.com/.well-known/openid-configuration",
    { agent: proxyAgent },
    (res) => {
      console.log("statusCode:", res.statusCode);
    },
  )
  .on("error", (e) => {
    console.error(e);
  });
