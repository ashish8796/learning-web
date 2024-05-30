const url = require("url");
const { parsedBody } = require("./utils/helper");

function getAllUsers(req, res, users) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  return res.end(JSON.stringify(users));
}

function getUserById(req, res, users) {
  const parsedUrl = url.parse(req.url);
  const { pathname } = parsedUrl;

  const id = Number(pathname.split("/")[2]);
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  const user = users.find((user) => user.id === id);
  return res.end(JSON.stringify(user));
}

function createUsers(req, res, users) {
  function getBody(body) {
    users.push(body);
    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(body));
  }

  parsedBody(req, getBody);
}

function updateUser(req, res, users) {
    console.log({users})
  function getBody(body) {
    const id = body.id;

    for(let i = 0; i < users.length; i++) {
        if(users[i].id === id) {
            users[i] = body;
        }
    }

    res.statusCode = 201;
    res.setHeader("Content-Type", "application/json");

    return res.end(JSON.stringify(body));
  }

  parsedBody(req, getBody);
}

function deleteUser(req, res, users) {
  const parsedUrl = url.parse(req.url);
  const { pathname } = parsedUrl;
  const id = Number(pathname.split("/")[2]);
  const temp = users.filter((user) => user.id !== id);
  return res.end("User is deleted.");
}

module.exports = {
  getAllUsers,
  getUserById,
  createUsers,
  updateUser,
  deleteUser,
};
