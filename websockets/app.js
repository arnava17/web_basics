const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

server = app.listen(3000);

const io = require('socket.io')(server);
io.on('connection', (socket) => {
  console.log('New User Connected');

  socket.username = "Anonymous";

  socket.on('change_username', (data) => {
    socket.username = data.username;
  })

  socket.on('new_message', ({message}) => {
    io.sockets.emit('new_message', {message, username : socket.username})
  })
})
