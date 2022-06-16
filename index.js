const express = require("express");
const corsMiddleWare = require("cors");
// Auth middleware: our own code. Checks for the existence of a token in a header called `authentication`.
const authMiddleWare = require("./auth/middleware");
const authRouter = require("./routers/auth");
const profileRouter = require("./routers/profileRouter");
const { PORT } = require("./config/constants");
// Create an express app
const app = express();
app.use(corsMiddleWare());

//websocket
const socketio = require("socket.io");
const http = require("http");
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  },
});

io.on("connection", (socket) => {
  console.log("we have connection");

  socket.on("join", ({ userId, room }, callback) => {
    console.log("joined conv", userId, room);

    // socket.emit("message", {
    //   user: "admin",
    //   text: `${user.name} ,welcome to the room ${room}`,
    // });
    // socket.broadcast.to(room).emit("message", {
    //   user: "admin",
    //   text: `${user.name} ,has joined!`,
    // });

    socket.join(room);
    // callback();
  });

  socket.on("sendMessage", (message, callback) => {
    io.to(message.room).emit("message", {
      user: message.userId,
      body: message.body,
      room: message.room,
      username: message.username,
    });
  });

  socket.on("disconnect", () => {
    console.log("user had left");
  });
});

/**
 * Middlewares
 *
 * It is advisable to configure your middleware before configuring the routes
 * If you configure routes before the middleware, these routes will not use them
 *
 */

// CORS middleware:  * Since our api is hosted on a different domain than our client
// we are are doing "Cross Origin Resource Sharing" (cors)
// Cross origin resource sharing is disabled by express by default

// express.json():be able to read request bodies of JSON requests a.k.a. body-parser
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

/**
 * Routes
 *
 * Define your routes and attach our routers here (now that middlewares are configured)
 */

app.use("/auth", authRouter);
app.use("/profiles", profileRouter);

// POST endpoint which requires a token for testing purposes, can be removed
app.post("/authorized_post_request", authMiddleWare, (req, res) => {
  // accessing user that was added to req by the auth middleware
  const user = req.user;
  // don't send back the password hash
  delete user.dataValues["password"];

  res.json({
    youPosted: {
      ...req.body,
    },
    userFoundWithToken: {
      ...user.dataValues,
    },
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
