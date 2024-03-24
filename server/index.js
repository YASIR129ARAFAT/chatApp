const express = require('express');
const app = express();
const cors = require('cors')


///////////////////
//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
////////////////////////////////////////
/**
These below two lines import the built-in http module in Node.js and create a new HTTP server instance by passing the Express app object to the createServer method. This allows us to use the same server instance for both HTTP and WebSocket connections.
 */
const http = require('http')
const server = http.createServer(app);

const { Server } = require('socket.io')
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods:["GET","POST"],
    }
})

io.on('connection', (socket) => {
    console.log('Received connection');
    console.log(`message from server side... user connected with id: ${socket.id}`);

    socket.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
    socket.on('send_message',(message,arg2,arg3,myObj)=>{ // recieve the args in same order as sent.
        console.log("message recieved from client: " ,message,arg2,arg3,myObj);
    })
});


const dotenv = require('dotenv')
dotenv.config({}) // you can give options like path etc



// app.get('/', (req, res) => {
//     res.send("server is ready")
// })






////////////////////////////////


const port = process.env.PORT;
server.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})