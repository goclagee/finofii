const https = require("https");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const body = JSON.parse(event.body || "{}");
  const { name, email, phone, message } = body;

  if (!name || !phone) {
    return {
      statusCode: 400,
      body: JSON.stringify({ status: -1, message: "name and phone are required" }),
    };
  }

  const payload = JSON.stringify({ name, email, phone, message });

  const options = {
    hostname: "finofii.investwell.app",
    path: "/api/aggregator/utils/createOutsideLead",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authName: "finofii141",
      apiKey: "278323c7c100794e2895a011f6e2d10c0f49a85c9d8d2e1b3656e24e48175392",
      "Content-Length": Buffer.byteLength(payload),
    },
  };

  return new Promise((resolve) => {
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          statusCode: res.statusCode,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: data,
        });
      });
    });

    req.on("error", (err) => {
      resolve({
        statusCode: 500,
        body: JSON.stringify({ status: -1, message: err.message }),
      });
    });

    req.write(payload);
    req.end();
  });
};
