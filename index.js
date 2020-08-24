const express=require("express");
const app =express();
const Datastore=require("nedb");
const db=new Datastore("./data.db");

db.loadDatabase();
const port=process.env.PORT || 3000;
app.listen(port,()=>console.log(`Server started at port ${port}...`));
app.use(express.static("public"));
app.use(express.json());

app.get("/api",(req,res)=>{
    db.find({},(err,data)=>{
        res.json(data);
    })
    
});

app.post("/api1",(req,res)=>{
    db.insert(req.body);
    req.body.status="Success";
    res.json(req.body);
})
