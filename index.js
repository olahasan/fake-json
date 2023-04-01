const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(db.json.books);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3001;

server.use(middlewares);
server.use(router);
server.listen(port);