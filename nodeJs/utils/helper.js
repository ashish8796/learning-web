function parsedBody(req, callback) {
  let body = "";

  req.on("data", function (chunk) {
    body += chunk.toString();
  });

  req.on("error", (e) => {
    console.log({ e });
  });

  req.on("end", () => {
    body = JSON.parse(body);
    callback(body);
  });
}

module.exports = {
  parsedBody
}
