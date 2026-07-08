const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

app.get('/reception', (req, res) => {
  res.sendFile(__dirname + '/public/reception.html');
});

app.get('/production', (req, res) => {
  res.sendFile(__dirname + '/public/production.html');
});

app.get('/', (req, res) => {
  res.redirect('/reception');
});

io.on('connection', (socket) => {
  socket.on('ring', () => {
    io.emit('bell-ring');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Bell server running on port ${PORT}`);
});
