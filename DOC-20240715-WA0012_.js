const mongoose=require("mongoose");
let compass_url='mongodb://localhost:27017/sampledb';
let mongodb_url='mongodb+srv://ritika:sandra_6644@cluster0.huw5huh.mongodb.net/ritika?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongodb_url).then(()=>{
    console.log("db connected");
})
.catch(()=>{
    console.log(err);
})


