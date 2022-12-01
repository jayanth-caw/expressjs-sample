const express =require ('express');
const  friendRouter=require('./routes/friends.router')
const messagesRouter=require('./routes/messages.router')

const app=express();

const PORT =3000;
 
app.use((req,res,next)=>{ //for get requests
    const start=Date.now();

    next();
    const end=Date.now()-start;
    console.log(`${req.method} ${req.url} ${end}ms`);
 })
 app.use('/site',express.static('public'))
app.use(express.json())  //for post requests
app.use('/friends',friendRouter)
app.use('/message',messagesRouter)

app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
})