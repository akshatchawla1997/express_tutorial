const express =require("express");
const messagesController = require('./controllers/messages.controller')
const friendsRouter = require('./Routes/friends.router')
const messagesRouter = require('./Routes/messages.router')
const app = express();
const PORT=3002;

app.get('/',(req,res)=>{
    res.send("congratulations i am working");
})


app.use('/friends',friendsRouter);
app.use('/messages',messagesRouter);
app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const end = Date.now()-start;
    console.log(`${req.method} ${req.url} ${end} ms`)
})
app.use(express.json());
app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
})