//1.mongode insatll => npm i mongoose
var mongoose = require("mongoose");
//mongoose.connect("url").then(()=>{}).catch(()=>{})
mongoose.connect("mongodb+srv://nicerose7732:nicerose@cluster0.wgjtytg.mongodb.net/ict?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Db connected")
})
.catch((err)=>{
    console.log(err)
});