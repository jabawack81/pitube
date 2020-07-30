// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

// Routing
app.use(express.static(path.join(__dirname, 'public')));

io.on("connection", (socket) => {

  socket.on("control new video",(data) => {
    console.log(data);
    socket.broadcast.emit("player new video", {
      videoId: data.videoId
    });
  });

  socket.on("control command", (data) => {
    console.log(data);
    socket.broadcast.emit("player command", {
      command: data.command
    })
  })

})

server.listen(port, () => {
  console.log('Server listening at port %d', port);
});
