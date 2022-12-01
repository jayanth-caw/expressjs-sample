const path=require('path') 
 
 function getMessages(req,res){
    
    res.sendFile(path.join(__dirname,'..','public','images','01.jpeg'))
   // res.send("hii jayanth ")
 }
 function postMessage(req,res){
    res.send("updating msgss ")
 }

 module.exports={
    getMessages,
    postMessage
 }