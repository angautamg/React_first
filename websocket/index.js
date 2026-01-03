const express=require('express');
const http=require('node:http');
const fs=require('fs');
const path=require('node:path');
const { Server } = require('socket.io');


const app=express();
const server=http.createServer(app);
const io=new Server(server);
const PORT=3000;
const PUBLIC_DIR=path.join(__dirname,'public');

// Middleware to serve static files
app.use(express.static(PUBLIC_DIR));    

// Route to serve the main HTML file
app.get('/',(req,res)=>{
    res.sendFile(path.join(PUBLIC_DIR,'index.html'));
});

io.on('connection', (socket) => {
    console.log('a user connected');

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
// Start the server
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
