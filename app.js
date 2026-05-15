const express = require('express');
const schedule = require('./mwr/schedule');
const id = require('./mwr/id');
const ep = require('./mwr/ep');
const info = require("./mwr/info");
const app = express();
const PORT =  process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT,(err)=>{
    if(err) {
        console.log(`Err:${err}`)
    }
    console.log("Server listening on " + "PORT: " + PORT)
})
app.get("/",(req,res)=>{
    res.json({
        Schedule : "/schedule?time=",
        Ep:"/episodes?id=",
        Id:"/page?name="        
    })
})

app.get("/schedule",async (req,res)=>{
    const time = req.query.time ;
    const Schedule = await schedule(time)
    res.json(Schedule)
})
app.get("/page",async (req,res)=>{
    const link = req.query.name;
    const Id = await id(link);
    res.json(Id)
})
app.get("/episodes",async (req,res)=>{
    const ID = req.query.id;
    const Ep = await ep(ID);
    res.json(Ep)
})
app.get("/info",async (req,res)=>{
    const name = req.query.name;
    const Info = await info(name);
    res.json(Info);
})