// import app from "./app";
// import { Server as WebSocketServer } from "socket.io";
// import http from "http";
// import { connectDB } from "./db";
// import Sockets from "./sockets";

// connectDB();

// const server = http.createServer(app);
// const httpServer = server.listen(3000);
// console.log('server listening');

// const io = new WebSocketServer(httpServer);

// Sockets(io);

import { Server as WebSocketServer } from "socket.io";
import http from "http";
import Sockets from "./sockets";
import app from "./app";
import { connectDB } from "./db";
import { PORT } from "./config";

connectDB();
const server = http.createServer(app);
const httpServer = server.listen(PORT);
console.log("Server on http://localhost:", PORT);

const io = new WebSocketServer(httpServer);

Sockets(io);