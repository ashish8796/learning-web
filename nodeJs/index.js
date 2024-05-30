const { createServer } = require("http");
const url = require("url");
const {
  getAllUsers,
  getUserById,
  createUsers,
  updateUser,
  deleteUser,
} = require("./users");
const users = require("./data.json");

const server = createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  const { pathname } = parsedUrl;
  const { method } = req;

  if (method === "GET" && pathname === "/users") {
    return getAllUsers(req, res, users);
  } else if (
    method == "GET" &&
    pathname.startsWith("/users") &&
    pathname.split("/")[2]
  ) {
    return getUserById(req, res, users);
  } else if (method == "POST" && pathname === "/users") {
    return createUsers(req, res, users);
  } else if (
    method == "PUT" &&
    pathname.startsWith("/users") &&
    pathname.split("/")[2]
  ) {
    return updateUser(req, res, users);
  } else if (
    method == "DELETE" &&
    pathname.startsWith("/users") &&
    pathname.split("/")[2]
  ) {
    return deleteUser(req, res, users);
  } else {
    return res.end("Default Response");
  }
});

server.listen(8080, () => {
  console.log("Server is listening on Port: 8080");
});
