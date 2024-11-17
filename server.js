const express=require("express");

const app=express();
const PORT=6969;

const userRoute=require("./routes/User");
const commentsRoute=require("./routes/Comments")

app.get("/",(req,res)=>{
    res.status(200).send({message:"server running...."})
})

app.use("/user",userRoute);
app.use("/comment",commentsRoute);


app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})